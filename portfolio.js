var cards = data["cards"];
var opacity = 0;
var fadeInInterval;
var fadeOutInterval;
var currentList;
var listHistory = [];
var currentScroll = 0;
var scrollTimeout = 0;
var scrollInterval;
var transitioning = false;

function fadeIn()
{
  transitioning = true;
  if(opacity < 100)
  {
  	opacity += 2;
    cardContainers = document.getElementById('container').children;
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
  if(opacity > 0)
  {
  	opacity -= 2;
    cardContainers = document.getElementById('container').children;
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
	str = event.srcElement.parentNode.parentNode.id;
	if(str.length == 0)
		str = event.srcElement.parentNode.parentNode.parentNode.id;
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
	if(listHistory.length > 0 && !transitioning)
	{
		fadeOutInterval = setInterval(fadeOut, 5, listHistory.pop());
		console.log(listHistory);
	}
}

function scroll(obj, item)
{
	var scrollDiv = obj.children[item].offsetLeft + obj.children[item].offsetWidth / 2 - obj.offsetWidth / 2;
	obj.scrollTo({ left: scrollDiv, behavior: 'smooth'});
	//obj.children[item].scrollIntoView({behavior: "smooth", block: "center"});
	setTimeout(scroll, 4000, obj, (item + 1) % obj.children.length);
	//setTimeout(smoothScroll, 10, obj, obj.scrollLeft, obj.scrollLeftobj.children[item].offsetWidth, item);
}

function smoothScroll(obj, cur, total, item)
{
	newCur = cur + Math.ceil((total - cur) * 0.1);
	obj.scrollLeft= Math.ceil((total - cur) * 0.1);
	if(newCur < total)
		setTimeout(smoothScroll, 10, obj, newCur, total, item);
	else
		setTimeout(scroll, 4000, obj, item + 1);
}

function displayList(list, index)
{
  currentList = list;
  container = document.getElementById('container');
  container.innerHTML = "";
  if(Array.isArray(list['content'])) // Show us the subcategories
  {
  	len = list['content'].length;
    w = container.offsetWidth;
    h = container.offsetHeight;
    aspect = w / h;
    numRows = Math.min(Math.ceil(Math.sqrt(len) / aspect), len);
	numCols = Math.ceil(len / numRows);
	if(numCols * numRows >= len + numCols)
		numRows -= 1;
    cardWidth = Math.floor(w / Math.ceil(len / numRows));
    cardHeight = Math.floor(h / numRows);
    
    temp = document.getElementById('cardTemplate');
    i = 0;
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
				listHistory.push(currentList);
				console.log(listHistory);
				display(data['content']);
			}
		});
		cc.style.opacity = opacity;
		titleWords = list['content'][i]['title'].split(' ');
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
  	len = 2;
    w = container.offsetWidth;
    h = container.offsetHeight;
    aspect = w / h;
    numRows = Math.min(Math.ceil(Math.sqrt(len) / aspect), len);
	numCols = Math.ceil(len / numRows);
	if(numCols * numRows >= len + numCols)
		numRows -= 1;
    cardWidth = Math.floor(w / Math.ceil(len / numRows));
    cardHeight = Math.floor(h / numRows);
    
    temp = document.getElementById('cardTemplate');
    i = 0;
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
				if(o != list['images'][list['images'].length - 1])
					im.style.paddingRight = '10px';
				c.appendChild(im);
			});
			c.scrollLeft = 0;
			currentScroll = 0;
			setTimeout(scroll, 4000, c, 0);
			c.addEventListener('mouseover', function() { clearInterval(scrollInterval); });
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

window.addEventListener('resize', function()
{
  displayList(currentList);
});

document.addEventListener("readystatechange", function()
{
  if(document.readyState == "complete")
	displayList(data);
});