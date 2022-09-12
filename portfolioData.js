var data = {
  "title":"root",
  "content": [
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
			  "title":"Boxman Arcade",
			  "content":"Over the course of my senior year of high school, I worked on my most ambitious implementation of Boxman I had ever undertaken. The goal for this version was to imagine what Boxman would be like of it originated in the early 1980s as its own arcade machine. \n\nI used a Super Pac-Man cabinet as the shell which I sanded and painted a nice Boxman-blue. Then I found some software I could run on the computer I put inside the cabinet that would allow it to use the original Super Pac-Man CRT as a monitor. After that it was a matter of drawing up graphics for the bezel, the control panel, and the marquee, getting those made at various sign shops, and actually writing the game to run. \n\nI finished the project 3 days before my grad party where it made its debut. It was a hit! The following winter I worked with the local arcade and got it placed there where it stood among real arcade machines for 6 months. It was pretty surreal seeing it adjacent to Super Mario Bros. and noticing how it blended right in. \n\nI consider this project a huge success and it was very fun to build!",
			  "images":[
				"images/boxman/arcade/finished-cabinet.jpg",
				"images/boxman/arcade/grad-party.jpg",
				"images/boxman/arcade/time-out-arcade-2.jpg",
				"images/boxman/arcade/time-out-arcade-1.jpg",
				"images/boxman/arcade/super-pac-man-1.jpg",
				"images/boxman/arcade/super-pac-man-2.jpg",
				"images/boxman/arcade/sanding.jpg",
				"images/boxman/arcade/painting-1.jpg",
				"images/boxman/arcade/painting-2.jpg",
				"images/boxman/arcade/painting-3.jpg",
				"images/boxman/arcade/painting-4.jpg",
				"images/boxman/arcade/painting-5.jpg",
				"images/boxman/arcade/monitor.jpg"
			  ]
			},
			{
			  "title":"Boxman Mobile",
			  "content":"In 2018, after hearing many people tell me to create this game for mobile devices, I decided to learn the Unity engine since I knew you could use it for making games like Boxman. I was able to use some of the knowledge I gained from learning the Blender game engine and apply it to this project. I programmed this version entirely on a bus ride from Florida to Iowa which was about 30 hours, and it was exactly the amount of time I needed. Unity uses the C# language as the back end of the framework, so that was the first thing I needed to familiarize myself with. Then I quickly got the basic game working by using the physics engine for the falling boxes and some C# handling touchscreen events that would move the player. But I knew that if this was going to be a mobile game it needed to look better than colored squares. So, I used the sprites from the Boxman Arcade version I was finishing up around the same time. I then gave the game a title screen with different difficulty selections, some music, and a high score saving system and it was done! On the Google Play Store, as of writing it has been downloaded over 400 times.",
			  "images":[
				"images/boxman/mobile/gameplay-1.webp",
				"images/boxman/mobile/gameplay-2.webp"
			  ]
			},
			{
			  "title":"Boxman VIC-20",
			  "content":"In 2017, I bought a Commodore VIC-20 off of craigslist, and I wanted to write Boxman for it in CBM BASIC. I knew that the slow speed of the 6502 processor combined with the slow speed of BASIC would force me to seriously optimize the code for drawing the screen, so it would be a good challenge. I also wanted to make the game less luck-based than it was previously, so in this version, you can nudge the box left or right as it's falling to allow the player to strategically build up towers or slopes. Also new in this version was that when you complete a row of boxes on the bottom, the screen would shift up (sort of like Tetris) so the player could keep playing as long as they didn't get squished by a falling box. As for the screen drawing routine, I knew it had to do as little as possible per loop of the game, so it only draws things that have changed on the screen and leaves everything else alone since the screen memory is persistent. ",
			  "images":[
			  ]
			},
			{
			  "title":"Boxman Standalone",
			  "content":"Inspired by small handheld games like the old McDonald's toys, I wanted to make a standalone Boxman game with a screen, a speaker, and two buttons.\n\nI used the case of an old power transformer as the enclosure that I cut a window into for a small TFT screen and two holes for buttons from a broken SNES controller. Inside the enclosure is an Arduino Nano that I programed to use the screen and the two buttons as the player's interface for Boxman. I was getting really good at writing Boxman implementations at this point, but I wanted this version to have music like two of the previous versions. This meant including a speaker in the enclosure and writing some code to play through a song at the same time as running the game. With the limited memory of the Arduino Nano, it was hard to fit the whole song on the chip, but with some compromises I was able to do it. ",
			  "images":[
				"images/boxman/standalone/gameplay-1.jpg"
			  ]
			},
			{
			  "title":"Boxman CE",
			  "content":"With the release of a new calculator in the TI-84 series in 2015, the TI-84 Plus CE, in 2017 I set out to program a new Boxman for this new calculator.\n\nA community member had developed a C compiler for this new calculator, so I decided I would use that to program this version. I knew some C but I had never done anything this complicated before. The trickiest bit was getting all the sprites encoded into memory for use with the toolchain's sprite drawing functions. By this time I was getting pretty comfortable writing the basic structure of a Boxman game, so I was able to spend more time polishing the look and feel of the game. This version features little machines at the top of the screen that slowly drop out boxes which I threw in to disambiguate where the boxes actually come from. It also features a title screen when you start up the game that explains the rules before you start playing.\n\nI uploaded the program to an online calculator enthusiast forum's program archives pages, and as of writing, Boxman CE has over 6700 downloads.",
			  "images":[
				"images/boxman/ce/gameplay.gif"
			  ]
			},
			{
			  "title":"Boxman Blender",
			  "content":"In 2016, I wanted to write a version of Boxman for computers, but not use Scratch. I had been learning Blender3D for a couple years and I knew it had a game engine built in to it, so I decided to create Boxman in the Blender Game Engine to learn its ins and outs. This was all new to me. I had never had to worry about 3D modeling or applying the right kind of collision physics to something before. Before long, though, by using the physics engine to handle the boxes falling, and a bit of python for moving the player around, I got a working version of Boxman running on my school computer as a standalone application.",
			  "images":[
			  ]
			},
			{
			  "title":"Boxman Monochrome",
			  "content":"In 2015, I set out to bring Boxman to the earlier TI-84 and TI-83 series of calculators. I was able to reuse most of the code except for the sprite drawing routines. This was a bit too easy though, so I implemented a feature unique to this version which was that you could break boxes in stacks that you couldn't climb. It would take a little while in game time to do so, but in a pinch it would allow you to escape from certain death. This version of Boxman was also the first to have multiple levels. Once you get to the top of the screen once, the screen resets and you start again from the bottom with the boxes falling faster.",
			  "images":[
				"images/boxman/monochrome/gameplay.gif"
			  ]
			},
			{
			  "title":"Box Man 2",
			  "content":"In 2014, I wanted to come back to the original version of Boxman, Box Guy, and re-write it in Scratch without my \"one class period\" time limit. A new feature in this version was a warning for each box telling you where it was going to fall.",
			  "images":[
			  ]
			},
			{
			  "title":"Boxman CSE",
			  "content":"Excited by the completion of Box Guy, I wanted to re-write the game for my graphing calculator I had just gotten for my algebra class, a TI-84 Plus C Silver Edition. I had never written a game that complex for a calculator yet, so I had to learn a lot about displaying graphics on the screen, writing a game loop with all the functionality, how to optimize it to run at a playable speed with the limitations of the calculator, etc. I found a community developed graphics library for the TI-84 PCSE which I used to draw the squares and the score at the top of the screen. I finished the game in 2013. In 2014, after learning a bit more about the graphics library I was using and having gained more knowledge about code optimization for the calculator, I updated this version with better graphics and got it to run almost twice as fast.",
			  "images":[
				"images/boxman/cse/gameplay.gif"
			  ]
			},
			{
			  "title":"Box Guy",
			  "content":"In my 7th grade year of school, I wanted to see if I could write a fully playable game from start to finish during my english class period. The computer lab computers had Scratch installed to them, so I started it up and tried to think of a simple game that I could program.\n\nI didn't want to spend any time on drawing sprites, so I just made the player a green square. The simplest goal I could think of was to get from the bottom of the screen to the top, and the player would have to climb up more squares to get there. Where do these squares come from? Well the easiest thing I thought would be for them to just fall from the top of the screen. So, there it was. The player climbing up falling squares. They win if they get to the top and they lose if a square falls on the player. I came up with the title \"Box Guy\" since the whole game was just about a guy who climbs boxes.\n\nI managed to get the game working by the end of the period which was very satisfying. I showed it to my friends and we all had fun trying to beat it. It was surprisingly challenging!",
			  "images":[
			  ]
			},
		  ],
          "images":[
			"images/boxman/boxman.png"
          ]
        },
        {
          "title":"Go Kart",
          "content":"For 2 weeks in Summer 2020, my girlfriend Moriah and I built a go kart.\n\nThe frame we made from various steel tubes we picked up from the junkyard that we cut and welded together. The engine is an 8HP Honda engine that we had in our garage that wasn't being used for anything. We built the seat out of 3/16\" plywood, upholstery foam, and faux leather. We bought the wheels, pedals, and steering wheel from an online go kart supply store since we couldn't make those ourselves.\n\nFrom the few times we've driven it around, it has held up very well! With a top speed of just over 40MPH, it is an absolute blast to drive.",
          "images":[
            "images/go-kart/finished-go-kart.jpg",
			"images/go-kart/ryan-zooming-past.gif",
			"images/go-kart/chair-on-frame.jpg",
			"images/go-kart/steering-wheel-check.jpg",
			"images/go-kart/moriah-fit-check.jpg",
			"images/go-kart/steering-wheel.jpg",
			"images/go-kart/welding-bumper.jpg",
			"images/go-kart/full-frame.jpg",
			"images/go-kart/priming.jpg",
			"images/go-kart/painting.jpg"
          ]
        },
        {
          "title":"\"Lead\" Zeppelin",
          "content":"",
          "images":[
            "images/lead-zeppelin/flying-1.jpg",
            "images/lead-zeppelin/flying.gif",
            "images/lead-zeppelin/pcb-1.jpg"
          ]
        },
        {
          "title":"Pocket BASIC Computer",
          "content":"During the winter of 2019-2020, using a Z8671 processor and a microcontroller as a stand-in \"terminal\", I built small computer that runs Tiny BASIC.\n\nI based the design off of the \"Seven Chip Computer\" in the Z8671's application notes. The part of the terminal is played by an ATMEGA328 microcontroller that reads the keyboard matrix and sends the characters to the Z8671 over UART, and reads the output from the Z8671 and displays it to the screen. The keyboard and the case are 3D printed, and the key labels are tiny vinyl decals sealed in Mod Podge.\n\nI enjoyed solving the unique problems this project posed. The 3D printed miniature keyboard was one of the harder problems to solve, forcing me to precisely characterize my 3D printer's tolerances and design around them. Another problem I had never had to solve before was where to find the obscure, obsolete QSRAM sister chip for the Z8671. I ended up lucking out and finding one on e-Bay that worked. All in all, it was a fun project that taught me many new design skills and made me solve new and interesting problems.",
          "images":[
		    "images/basic-computer/finished-computer.jpg",
			"images/basic-computer/keyboard-matrix.jpg",
			"images/basic-computer/logic-board.jpg",
			"images/basic-computer/logic-board-wiring.jpg",
			"images/basic-computer/full-wiring.jpg"
          ]
        },
        {
          "title":"Programmer Calculator",
          "content":"In summer of 2021 I designed and built a physical programmer calculator. \n\nIt is a custom PCB surrounded by a 3D printed ABS case with 3D printed buttons (don't even ask how many button iterations I went through) each with a drawn-on label. The screen is 16 7-segment displays, 8 for the top row and 8 for the bottom row to display 2 32 bit numbers, and 64 individual red LEDs to display the binary representation of the same 2 32 bit numbers. The brain is an ATMEGA 128 because I wanted the extra IO for the button matrix and keypad LEDs.\n\nIt can display and receive numbers in decimal, binary, and hex, as well as doing all the necessary integer operations and bitwise operations. The calculator operates using Reverse Polish Notation. The two numbers displayed are the two top numbers on the stack (the bottom number is the top of the stack.) Single operand operations such as bit shifting, 2^x, 1's and 2's compliment are done on the number on the top of the stack.\n\nIt measures 3.05\" x 4.7\" x 0.6\". I heavily based its looks off of old Commodore calculators with red LED screens and colorful buttons.\n\nThis was a fun project to build, and has come in handy more than a few times for me.",
          "images":[
			"images/programmer-calculator/finished-calculator.jpeg",
			"images/programmer-calculator/finished-case.jpg"
          ]
        },
        {
          "title":"SCI Bots",
          "content":"",
          "images":[
			"images/sci-bots/glamour.jpg",
			"images/sci-bots/driving-1.gif",
			"images/sci-bots/driving-2.gif",
			"images/sci-bots/sci-2018.jpg",
			"images/sci-bots/cad-1.jpg",
			"images/sci-bots/beam-break.jpg",
			"images/sci-bots/wood-proto.jpg",
			"images/sci-bots/wood-proto-wiring.jpg",
			"images/sci-bots/building-1.jpg",
			"images/sci-bots/building-2.jpg",
			"images/sci-bots/building-3.jpg",
			"images/sci-bots/building-4.jpg",
			"images/sci-bots/building-5.jpg",
			"images/sci-bots/building-6.jpg",
			"images/sci-bots/installing-1.jpg",
			"images/sci-bots/installing-2.jpg",
			"images/sci-bots/new-board.jpg",
			"images/sci-bots/assembly-1.jpg",
			"images/sci-bots/assembly-2.jpg",
			"images/sci-bots/new-install-1.jpg",
			"images/sci-bots/charging-pad.jpg",
			"images/sci-bots/new-install-2.jpg",
			"images/sci-bots/new-install-3.jpg",
          ]
        }
      ],
      "images":[
      ]
    }
  ],
  "images":[
  ]
};