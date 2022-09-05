var data = {
  "cards": [
    {
      "title":"About Me",
      "content":"My name is Nathan Paskach, and this is some placeholder text.",
      "images":[
      ]
    },
    {
      "title":"Projects",
      "content":[
        {
          "title":"Boxman",
          "content":[
			{
			  "title":"Box Guy",
			  "content":"In summer of 2021 I designed and built a physical programmer calculator, and this is some placeholder text.",
			  "images":[
			  ]
			},
			{
			  "title":"Boxman CSE",
			  "content":"In summer of 2021 I designed and built a physical programmer calculator, and this is some placeholder text.",
			  "images":[
			  ]
			},
			{
			  "title":"Boxman CE",
			  "content":"In summer of 2021 I designed and built a physical programmer calculator, and this is some placeholder text.",
			  "images":[
			  ]
			},
		  ],
          "images":[
          ]
        },
        {
          "title":"Programmer Calculator",
          "content":"In summer of 2021 I designed and built a physical programmer calculator, and this is some placeholder text.",
          "images":[
          ]
        },
        {
          "title":"Go Kart",
          "content":"For 2 weeks in Summer 2020, my girlfriend Moriah and I built a go kart from junkyard scrap metal and a Honda generator engine we had lying around.",
          "images":[
            "images/go-kart/finished-go-kart.jpg",
			"images/go-kart/chair-on-frame.jpg",
			"images/go-kart/steering-wheel.jpg",
			"images/go-kart/welding-bumper.jpg",
			"images/go-kart/painting.jpg"
          ]
        },
        {
          "title":"Pocket BASIC Computer",
          "content":"Using a Z8671 processor, lots of wires, and a microcontroller to handle the screen and keyboard, I was able to build a small computer that runs Tiny BASIC.",
          "images":[
		    "images/basic-computer/finished-computer.jpg",
			"images/basic-computer/keyboard-matrix.jpg",
			"images/basic-computer/logic-board.jpg",
			"images/basic-computer/logic-board-wiring.jpg",
			"images/basic-computer/full-wiring.jpg"
          ]
        }
      ],
      "images":[
      ]
    }
  ]
};
var cards = data["cards"];
var opacity = 0;
var fadeInInterval;
var fadeOutInterval;
var currentList;

function fadeIn()
{
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
  }
}

function fadeOut(list)
{
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
	str = event.srcElement.parentNode.parentNode.id;
	root.forEach(o => 
  {
  	console.log(o);
  	if(o['title'] == str)
    {
    	console.log(o['content']);
    	fadeOutInterval = setInterval(fadeOut, 5, o['content']);
    }
    else
    {
    	if(Array.isArray(o['content']))
	    	display(o['content']);
    }
  });
}

function displayList(list)
{
	currentList = list;
  container = document.getElementById('container');
	container.innerHTML = "";
	if(Array.isArray(list)) // Show us the subcategories
  {
  	len = list.length;
    w = container.offsetWidth;
    h = container.offsetHeight;
    aspect = w / h;
    numRows = Math.min(Math.ceil(Math.sqrt(len) / aspect), len);
	numCols = Math.ceil(len / numRows);
	if(numCols * numRows >= len + numCols)
		numRows -= 1;
    cardWidth = Math.floor(w / Math.ceil(len / numRows));
    cardHeight = Math.floor(h / numRows);
    console.log({len, aspect, numRows, cardWidth, cardHeight});
    
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
        c.children[0].textContent = list[i]['title'];
        c.addEventListener('click', () => display(cards));
		cc.style.opacity = opacity;
        //c.style.opacity = opacity;
        //cb.style.opacity = opacity;
		c.style.fontSize = cardHeight * 0.1 + 'px';
		c.style.borderRadius = cardHeight * 0.05 + 'px';
		cb.style.borderRadius = cardHeight * 0.05 + 'px';
		if(list[i]['images'].length > 0)
		{
			cb.style.backgroundImage="url(" + list[i]['images'][0] + ")";
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
        cc.id = list[i]["title"];
        container.appendChild(cc);
        i++;
      }
    }
    fadeInInterval = setInterval(fadeIn, 5);
  }
  else // Show us the page
  {
  	
  }
}

window.addEventListener('resize', function()
{
  displayList(currentList);
});

document.addEventListener("readystatechange", function()
{
  if(document.readyState == "complete")
	displayList(cards);
});