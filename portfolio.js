var cards = data["cards"];
var opacity = 0;
var fadeInInterval;
var fadeOutInterval;
var currentList;
var currentScroll = 0;
var scrollTimeout = 0;
var scrollInterval;
var scrollObj;
var oldScrollPos = 0;
var transitioning = false;
var clickedObject = null;

function fadeIn()
{
  transitioning = true;
  if(opacity < 100)
  {
  	opacity += 2;
    var cardContainers = document.getElementById('container').children;
    for(i = 0; i < cardContainers.length; i++)
    {
		cardContainers[i].style.opacity = opacity / 100;
    	// cardContainers[i].children[0].style.opacity = opacity / 100;
    	// cardContainers[i].children[0].children[0].style.opacity = opacity / 100;
    }
  }
  else
  {
  	clearInterval(fadeInInterval);
	transitioning = false;
  }
}

function fadeOut(list)
{
  transitioning = true;
  clickedObject = list['title'];
  if(opacity > 0)
  {
  	opacity -= 2;
    var cardContainers = document.getElementById('container').children;
    for(i = 0; i < cardContainers.length; i++)
    {
		cardContainers[i].style.opacity = opacity / 100;
    	// cardContainers[i].children[0].style.opacity = opacity / 100;
    	// cardContainers[i].children[0].children[0].style.opacity = opacity / 100;
    }
  }
  else
  {
  	clearInterval(fadeOutInterval);
    displayList(list);
  }
}

function display(root)
{
	if(transitioning)
		return;
	var str = event.srcElement.parentNode.parentNode.id;
	if(str.length == 0)
		str = event.srcElement.parentNode.parentNode.parentNode.id;
	clickedObject = str;
	root.forEach(o => 
	{
		if(o['title'] == str)
		{
			fadeOutInterval = setInterval(fadeOut, 5, o);
		}
		else
		{
			if(Array.isArray(o['content']))
				display(o['content']);
		}
	});
}

function back()
{
	if(!transitioning)
	{
		obj = findParentOfItem(data, currentList['title']);
		if(obj != '')
			window.location.href = '#' + obj['title'];
		// backAnimate(obj);
	}
}

function backAnimate(obj)
{
	fadeOutInterval = setInterval(fadeOut, 5, obj);
	oldScrollPos = 0;
	scrollObj = null;
}

function detectScroll(e) {
	clearTimeout(scrollTimeout);
	scrollTimeout = setTimeout(function() {
		oldScrollPos = scrollObj.scrollLeft;
		scrollObj.removeEventListener('scroll', detectScroll);
	}, 100);
}

function scroll(obj, item)
{
	scrollObj = obj;
	if(oldScrollPos == obj.scrollLeft)
	{
		var scrollDiv = obj.children[item].offsetLeft + obj.children[item].offsetWidth / 2 - obj.offsetWidth / 2;
		obj.scrollTo({ left: scrollDiv, behavior: 'smooth'});
		
		scrollObj.addEventListener('scroll', detectScroll);
		scrollInterval = setTimeout(scroll, 4000, obj, (item + 1) % obj.children.length);
	}
}

function displayList(list, index)
{
  currentList = list;
  var container = document.getElementById('container');
  container.innerHTML = "";
  if(Array.isArray(list['content'])) // Show us the subcategories
  {
  	var len = list['content'].length;
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var aspect = w / h;
    var numRows = Math.min(Math.ceil(Math.sqrt(len) / aspect), len);
	var numCols = Math.ceil(len / numRows);
	if(numCols * numRows >= len + numCols)
		numRows -= 1;
    var cardWidth = Math.floor(w / Math.ceil(len / numRows));
    var cardHeight = Math.floor(h / numRows);
    
    var temp = document.getElementById('cardTemplate');
    var i = 0;
    for(row = 0; row < numRows; row++)
    {
    	for(col = 0; col < len / numRows; col++)
      {
      	if(i >= len)
        	continue;
      	var cc = temp.cloneNode(true);
        var cb = cc.children[0];
        var c = cc.children[0].children[0];
        c.children[0].textContent = list['content'][i]['title'];
		c.children[0].style.padding = '10px';
        c.addEventListener('click', function()
		{
			if(!transitioning)
			{
				display(data['content']);
				window.location.href = '#' + this.textContent.trim();
			}
		});
		cc.style.opacity = opacity;
		var titleWords = list['content'][i]['title'].split(' ');
		var longest = titleWords.sort(
			function (a, b) {
				return b.length - a.length;
			}
		)[0];
		c.style.fontSize = Math.min(cardHeight * 0.1, cardWidth / longest.length) + 'px';
		c.style.borderRadius = cardHeight * 0.05 + 'px';
		cb.style.borderRadius = cardHeight * 0.05 + 'px';
		if(list['content'][i]['images'].length > 0)
		{
			cb.style.backgroundImage="url(" + list['content'][i]['images'][0] + ")";
			cb.style.backgroundSize = 'cover';
			cb.style.backgroundPosition = 'center';
			c.style.backdropFilter = 'brightness(50%) blur(4px)';
		}
		else
		{
			c.style.backgroundColor = '#aaccff';
		}
        cc.style.left = col * cardWidth + 'px';
        cc.style.top = row * cardHeight + 'px';
        cc.style.width = cardWidth + 'px';
        cc.style.height = cardHeight + 'px';
        cc.style.display = "";
        cc.id = list['content'][i]["title"];
        container.appendChild(cc);
        i++;
      }
    }
    fadeInInterval = setInterval(fadeIn, 5);
  }
  else // Show us the page
  {
  	var len = 2;
	if(list['images'].length == 0)
	  len = 1;
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var aspect = w / h;
    var numRows = Math.min(Math.ceil(Math.sqrt(len) / aspect), len);
	var numCols = Math.ceil(len / numRows);
	if(numCols * numRows >= len + numCols)
		numRows -= 1;
    var cardWidth = Math.floor(w / Math.ceil(len / numRows));
    var cardHeight = Math.floor(h / numRows);
    
    var temp = document.getElementById('cardTemplate');
    var i = 0;
	for(row = 0; row < numRows; row++)
    {
      for(col = 0; col < len / numRows; col++)
      {
		if(i >= len)
        	continue;
      	var cc = temp.cloneNode(true);
        var cb = cc.children[0];
		cb.className = "cardBackgroundNoGrow";
        var c = cc.children[0].children[0];
		if(i == 0) // We're dealing with the textbox
		{
			var h = document.createElement('h2');
			h.style.fontSize = cardHeight * 0.1 + 'px';
			h.textContent = list['title'];
			h.style.padding = '20px';
			var b = c.children[0].cloneNode(true);
			b.textContent = list['content'];
			b.style.fontSize = cardHeight * 0.05 + 'px';
			b.style.padding = '20px';
			b.style.marginBottom = cardHeight * 0.05 + 'px';
			b.style.marginTop = '20px';
			b.style.overflowY = 'auto';
			c.innerHTML = "";
			c.appendChild(h);
			c.appendChild(b);
			c.style.backgroundColor = '#aaccff';
		}
		else // We're dealing with the image gallery
		{
			c.innerHTML = "";
			c.style.overflowX = 'auto';
			c.style.overflowY = 'hidden';
			c.style.flexDirection = 'row';
			c.style.justifyContent = 'normal';
			c.style.backgroundColor = '#000000';
			list['images'].forEach(o =>
			{
				var im = document.createElement('img');
				im.src = o;
				im.style.height = cardHeight + 'px';
				im.onload = function() {
					if(this.width / this.height > cardWidth / cardHeight)
					{
						im.style.height = cardWidth / this.width * this.height + 'px';
						//im.style.width = cardWidth + 'px';
					}
				}
				if(o != list['images'][list['images'].length - 1])
					im.style.paddingRight = '10px';
				if(o != list['images'][0])
					im.style.paddingLeft = '10px';
				c.appendChild(im);
			});
			c.scrollLeft = 0;
			currentScroll = 0;
			scrollInterval = setTimeout(scroll, 10, c, 0);
		}
		cc.style.opacity = opacity;
        //c.style.opacity = opacity;
        //cb.style.opacity = opacity;
		c.style.borderRadius = cardHeight * 0.05 + 'px';
		cb.style.borderRadius = cardHeight * 0.05 + 'px';
	
		cc.style.left = col * cardWidth + 'px';
        cc.style.top = row * cardHeight + 'px';
        cc.style.width = cardWidth + 'px';
        cc.style.height = cardHeight + 'px';
        cc.style.display = "";
        // cc.id = list['content'][i]["title"];
        container.appendChild(cc);
        i++;
	  }
	}
    fadeInInterval = setInterval(fadeIn, 5);
  }
}

function findItem(root, title)
{
	if(root['title'] == title)
		return root;
	if(Array.isArray(root['content']))
	{
		for(var i = 0; i < root['content'].length; i++)
		{
			foundItem = findItem(root['content'][i], title)
			if(foundItem != '')
				return foundItem;
		}
	}
	return '';
}

function findParentOfItem(root, title)
{
	if(Array.isArray(root['content']))
	{
		for(var i = 0; i < root['content'].length; i++)
		{
			if(root['content'][i]['title'] == title)
				return root
		}
		for(var i = 0; i < root['content'].length; i++)
		{
			foundItem = findParentOfItem(root['content'][i], title)
			if(foundItem != '')
				return foundItem;
		}
	}
	return '';
}

window.addEventListener('resize', function()
{
  displayList(currentList);
});

document.addEventListener("readystatechange", function()
{
  if(document.readyState == "complete")
  {
	if(window.location.hash.substr(1) == '')
		window.location.href = '#Home';
	else
	{
		console.log(decodeURI(window.location.hash.substr(1)));
		console.log(findItem(data, decodeURI(window.location.hash.substr(1))));
		var s = findItem(data, decodeURI(window.location.hash.substr(1)));
		if(s != '')
			displayList(s);
		else
			window.location.href = '#Home';
	}
  }
});

window.addEventListener('hashchange',() => {
	if(decodeURI(window.location.hash.substr(1)) == '')
	{
		window.location.href = '#Home';
		return;
	}
	if(transitioning)
	{
		window.location.href = '#' + clickedObject;
	}
	if(decodeURI(window.location.hash.substr(1)) != clickedObject)
	{
		backAnimate(findItem(data, decodeURI(window.location.hash.substr(1))));
	}
})