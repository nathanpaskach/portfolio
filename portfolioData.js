var data = {
	"title":"Home",
	"content":[
		{
			"title":"About Me",
			"content":"My name is Nathan Paskach. I am in my 5th year at Iowa State studying Computer Engineering. I enjoy building electronics projects, anything to do with model rockets, <a href=\"#Go%20Kart\">go-karts</a>, <a href=\"#Boxman%20Arcade\">arcade</a>, and <a href=\"#Telescope%20Star%20Tracker\">astronomy</a>. I've been a member of the Iowa State marching band for all five of my Fall semesters, and when I'm not doing band or school work, I try to keep myself busy with various <a href=\"#Personal%20Projects\">personal projects</a>.\n\nLately I've taken up astrophotography as a hobby, and I've made a few projects centered around getting better photos of planets. I'm slowly working my way to being able to take pictures of galaxies and nebulae, but there are a few more things I need to figure out before that can happen with any kind of reliability.",
			"images":[
				"images/about-me/vermeer.jpg",
				"images/about-me/go-kart.jpg",
				"images/about-me/marching-band.jpg",
				"images/about-me/time-out-arcade.jpg",
				"images/about-me/rocket-day.png"
			]
		},
		{
			"title":"Projects",
			"content":[
				{
					"title":"Personal Projects",
					"content":[
						{
							"title":"Boxman",
							"content":[
								{
									"title":"Boxman GameBoy",
									"content":"-STILL IN PROGRESS-\n\nMy brother found two GameBoys at a garage sale for $10 each, so he obviously bought them both, and let me buy one of them from him for $10. I wanted to write a Boxman for the GameBoy, and maybe even create a physical cartridge for it.\n\nI found a C based GameBoy development kit which allowed me to program a game in C and compile it into a GameBoy game. I test this game using a GameBoy emulator on my computer, but I also bought a GameBoy cartridge that uses a MicroSD card to hold GameBoy games and allow me to pick one from a list to boot up. Occasionally I will put a major revision of my Boxman game on this cartridge to try it on real hardware.",
									"images":[
										"images/boxman/gameboy/gameplay.gif",
										"images/boxman/gameboy/gameplay-1.bmp",
										"images/boxman/gameboy/gameplay-2.bmp"
									]
								},
								{
									"title":"Boxman TTL",
									"content":"-STILL IN PROGRESS-\n\nAs a way to push myself to my digital logic design limits, I wanted to create a version of Boxman that ran entirely on TTL logic with no programmable microcontrollers or computer. I created the double board monster in 2019 after spending many weeks designing what I thought would be a functioning circuit. I was wrong, though, and upon putting it together and powering it on, it wasn't even close to working. I spent many many hours in the Iowa State CprE building using the oscilloscopes there to try and debug it, but eventually I had to give up.\n\nI knew I had to find a way to fully simulate the circuit before trying to build another one. This led me to find a Java based digital logic simulation software called Logisim. I designed a fully working Boxman TTL circuit in this software that was actually playable in real-time simulation.\n\nThe next step in this project is to take the Logisim circuit and build it on a large breadboard, or at least the individual subsystems to make sure they work in real life. Then I will draw it up in EAGLE or Altium and create a second round of boards.",
									"images":[
										"images/boxman/ttl/video-board.jpg",
										"images/boxman/ttl/logic-board.jpg",
										"images/boxman/ttl/circuit.png"
									]
								},
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
										"images/boxman/vic-20/gameplay.gif"
									]
								},
								{
									"title":"Boxman Standalone",
									"content":"Inspired by small handheld games like the old McDonald's toys, I wanted to make a standalone Boxman game with a screen, a speaker, and two buttons.\n\nI used the case of an old power transformer as the enclosure that I cut a window into for a small TFT screen and two holes for buttons from a broken SNES controller. Inside the enclosure is an Arduino Nano that I programed to use the screen and the two buttons as the player's interface for Boxman. I was getting really good at writing Boxman implementations at this point, but I wanted this version to have music like two of the previous versions. This meant including a speaker in the enclosure and writing some code to play through a song at the same time as running the game. With the limited memory of the Arduino Nano, it was hard to fit the whole song on the chip, but with some compromises I was able to do it. ",
									"images":[
										"images/boxman/standalone/gameplay.gif"
									]
								},
								{
									"title":"Boxman CE",
									"content":"With the release of a new calculator in the TI-84 series in 2015, the TI-84 Plus CE, in 2017 I set out to program a new Boxman for this new calculator.\n\nA community member had developed a C compiler for this new calculator, so I decided I would use that to program this version. I knew some C but I had never done anything this complicated before. The trickiest bit was getting all the sprites encoded into memory for use with the toolchain's sprite drawing functions. By this time I was getting pretty comfortable writing the basic structure of a Boxman game, so I was able to spend more time polishing the look and feel of the game. This version features little machines at the top of the screen that slowly drop out boxes which I threw in to disambiguate where the boxes actually come from. It also features a title screen when you start up the game that explains the rules before you start playing.\n\nI uploaded the program to an online calculator enthusiast forum's program archives pages, and as of writing, Boxman CE has over 6700 downloads.",
									"images":[
										"images/boxman/ce/gameplay-1.gif"
									]
								},
								{
									"title":"Boxman Blender",
									"content":"In 2016, I wanted to write a version of Boxman for computers, but not use Scratch. I had been learning Blender3D for a couple years and I knew it had a game engine built in to it, so I decided to create Boxman in the Blender Game Engine to learn its ins and outs. This was all new to me. I had never had to worry about 3D modeling or applying the right kind of collision physics to something before. Before long, though, by using the physics engine to handle the boxes falling, and a bit of python for moving the player around, I got a working version of Boxman running on my school computer as a standalone application.",
									"images":[
										"images/boxman/blender/gameplay.gif"
									]
								},
								{
									"title":"Boxman Monochrome",
									"content":"In 2015, I set out to bring Boxman to the earlier TI-84 and TI-83 series of calculators. I was able to reuse most of the code except for the sprite drawing routines. This was a bit too easy though, so I implemented a feature unique to this version which was that you could break boxes in stacks that you couldn't climb. It would take a little while in game time to do so, but in a pinch it would allow you to escape from certain death. This version of Boxman was also the first to have multiple levels. Once you get to the top of the screen once, the screen resets and you start again from the bottom with the boxes falling faster.",
									"images":[
										"images/boxman/monochrome/gameplay-1.gif"
									]
								},
								{
									"title":"Box Man 2",
									"content":"In 2014, I wanted to come back to the original version of Boxman, Box Guy, and re-write it in Scratch without my \"one class period\" time limit. A new feature in this version was a warning for each box telling you where it was going to fall.",
									"images":[
										"images/boxman/scratch-2/gameplay.gif"
									]
								},
								{
									"title":"Boxman CSE",
									"content":"Excited by the completion of Box Guy, I wanted to re-write the game for my graphing calculator I had just gotten for my algebra class, a TI-84 Plus C Silver Edition. I had never written a game that complex for a calculator yet, so I had to learn a lot about displaying graphics on the screen, writing a game loop with all the functionality, how to optimize it to run at a playable speed with the limitations of the calculator, etc. I found a community developed graphics library for the TI-84 PCSE which I used to draw the squares and the score at the top of the screen. I finished the game in 2013. In 2014, after learning a bit more about the graphics library I was using and having gained more knowledge about code optimization for the calculator, I updated this version with better graphics and got it to run almost twice as fast.",
									"images":[
										"images/boxman/cse/gameplay-2.gif",
										"images/boxman/cse/gameplay-1.gif"
									]
								},
								{
									"title":"Box Guy",
									"content":"In my 7th grade year of school, I wanted to see if I could write a fully playable game from start to finish during my english class period. The computer lab computers had Scratch installed to them, so I started it up and tried to think of a simple game that I could program.\n\nI didn't want to spend any time on drawing sprites, so I just made the player a green square. The simplest goal I could think of was to get from the bottom of the screen to the top, and the player would have to climb up more squares to get there. Where do these squares come from? Well the easiest thing I thought would be for them to just fall from the top of the screen. So, there it was. The player climbing up falling squares. They win if they get to the top and they lose if a square falls on the player. I came up with the title \"Box Guy\" since the whole game was just about a guy who climbs boxes.\n\nI managed to get the game working by the end of the period which was very satisfying. I showed it to my friends and we all had fun trying to beat it. It was surprisingly challenging!",
									"images":[
										"images/boxman/box-guy/gameplay.gif"
									]
								}
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
							"content":"In summer of 2021 I designed and built a physical programmer calculator. \n\nIt is a custom PCB surrounded by a 3D printed ABS case with 3D printed buttons each with a drawn-on label. The screen is 16 individual 7-segment displays, 8 for the top row and 8 for the bottom row to display 2 32 bit numbers, and 64 individual red LEDs to display the binary representation of the same 2 32 bit numbers. The brain is an ATMEGA 128 because I wanted the extra IO for the button matrix and keypad LEDs.\n\nIt can display and receive numbers in decimal, binary, and hex, as well as doing all the necessary integer operations and bitwise operations. The calculator operates using Reverse Polish Notation. The two numbers displayed are the two top numbers on the stack (the bottom number is the top of the stack.) Single operand operations such as bit shifting, 2^x, 1's and 2's compliment are done on the number on the top of the stack.\n\nIt measures 3.05\" x 4.7\" x 0.6\". I heavily based its looks off of old Commodore calculators with red LED screens and colorful buttons.\n\nThis was a fun project to build, and has come in handy more than a few times for me.",
							"images":[
								"images/programmer-calculator/finished-calculator.jpeg",
								"images/programmer-calculator/layout-and-pcb.jpg",
								"images/programmer-calculator/finished-case.jpg"
							]
						},
						{
							"title":"SCI Bots",
							"content":"Throughout all 5 of my college years I worked with the Science Center of Iowa (SCI) and a group of 5 other students to develop a permanent exhibit for installation in SCI's \"Why the Sky?\" exhibit.\n\nThe first year of work was all about exploring the concept of using physical tiles with arrows on them to control a small model rover by inserting them into a control panel. The control panel would recognize which tiles were inserted (forward, backward, turn left, turn right) and would command the rover to do each instruction one by one. This would introduce kids who interact with the exhibit to the idea of a program, and how simple instructions executed one after the other could accomplish a complex goal. We built a very rudimentary rover with 2 rear wheels and a ball bearing as a central front wheel, as well as a basic control panel that could hold 3 tiles. We brought this to various events to see how kids would react and if they would understand how to use it and what was happening. We learned enough to start work on our second prototype.\n\nThe next prototype was a wooden control panel with 4 tile slots and a more robust overall design. We also beefed up the rover's motors because the old ones could barely move the rover when not on a smooth surface. We brought this to more events and gathered more data on the users' experience. We learned that using physical switches mechanically pressed down by the tiles was not a very reliable way to detect the tile type. We also had the idea to change the transmit button to green instead of red, as lots of kids were hesitant to press a big flashing red button.\n\nFinally we had enough information and user testing to build the final permanent installation. I designed the final rover to look like a real Mars rober, and we 3D printed and assembled 6 of them. We built 2 control panels for the 2 separate stations of the exhibit, this time using RFID readers for the tile slots, and installed them at SCI where they are currently on display.",
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
								"images/sci-bots/new-install-3.jpg"
							]
						},
						{
							"title":"Telescope Star Tracker",
							"content":"Since I've been getting deeper into the hobby of astronomy, I've been wanting a way to get my telescope to automatically track the sky so I don't need to keep adjusting it as Earth rotates. I had an off-the-shelf product that was built for the exact telescope mount that I had that would just spin the fine-adjustment wheel at the right speed to track the sky, but this assumed you had perfectly polar-aligned your mount, which I am not capable of doing. So, I wanted something that would actually track something bright in the sky like a star or a planet and use 2 motors for both adjustment axes to move the mount.\n\nI bought two extremely fine stepper motors that were pretty much regular stepper motors with big planetary gearboxes bolted on the front. I then used an Arduino and two stepper motor drivers to control the motors. I had already made a small 3D printed telescope for a separate project that didn't end up panning out, but I was able to repurpose it as the guide scope. I used an old webcam pressed against a cheap eyepiece for the guide camera, and I wrote a bit of Python code that used OpenCV to find all the stars in the image and allow the user to pick one to track. The code then sends commands over USB to the Arduino which moves the motors accordingly.\n\nI used this system to track and photograph Jupiter, and I ended that night with the best photo of Jupiter I have ever taken. This was because I was able to get a much higher percentage of high quality images to stack together in the same amount of time. I intend to use this system whenever I pull out the telescope since it really improves the experience and I can focus on observation instead of constant adjustments.",
							"images":[
								"images/telescope-star-tracker/full-system.jpg",
								"images/telescope-star-tracker/control-box.jpg",
								"images/telescope-star-tracker/guide-scope-2.jpg",
								"images/telescope-star-tracker/motors.jpg",
								"images/telescope-star-tracker/guide-scope.jpg",
								"images/telescope-star-tracker/jupiter.png"
							]
						},
						{
							"title":"Temperature Watch",
							"content":"In early 2018, I wanted to make a smart watch project, but I wanted it to do something other than tell time. So, I thought it would be somewhat useful for it to have a thermometer and tell temperature.\n\nI got a small OLED screen on a breakout board, and the temperature sensor, also on its own breakout board. I then made a prototype with an Arduino and got it to work as I liked. Then I drew up the circuit in EAGLE and created the board layout making sure to leave slots in the PCB for the watch band. I got all the parts and the boards, soldered it together and programmed it, and I had my working temperature watch! It's powered by a small lithium ion battery that's the same size as the boards. It lasts for a few days on one charge.\n\nI wore it around for a few days, but I quickly found that when there was no air current, it would read the temperature of the air directly against my skin which was consistently a few degrees higher than the actual room's temperature, so it works a lot better outdoors or while running.",
							"images":[
								"images/temperature-watch/completed-watch.jpg",
								"images/temperature-watch/functional-demo.gif",
								"images/temperature-watch/schematic.jpg",
								"images/temperature-watch/board-layout.jpg"
							]
						}
					],
					"images":[
						"images/programmer-calculator/finished-calculator.jpeg"
					]
				},
				{
					"title":"School Projects",
					"content":[
						{
							"title":"Con-sea-erge",
							"content":"Senior design project: Fish tank status monitor/auto feeder. Currently in progress.",
							"images":[
								"images/con-sea-erge/stock-fish.jpg"
							]
						},
						{
							"title":"\"Lead\" Zeppelin",
							"content":"In Spring 2019 in CprE 186, three classmates and I built a remote control blimp that we called the \"Lead\" Zeppelin (a play on Led Zeppelin; \"lead\" because we used leaded solder, and zeppelin is another word for blimp.) It was a custom PCB with a microcontroller, 2 dual H-bridge chips for controlling 4 DC motors, mounting points for the 4 motors, and an RC receiver. The RC receiver generates PWM signals indicating the state of the controller. We used the microcontroller to read in the PWM signals and talk to the motor controllers to spin the motors in the correct direction. We bought a 3 foot diameter balloon and filled it with helium which was enough to offset the weight of the PCB. We brought it to the Howe Hall atrium at Iowa State to test fly it before taking it to the project showcase at the end of the semester.",
							"images":[
								"images/lead-zeppelin/group.jpg",
								"images/lead-zeppelin/flying-1.jpg",
								"images/lead-zeppelin/flying.gif",
								"images/lead-zeppelin/pcb-1.jpg"
							]
						},
						{
							"title":"Simple Assembly Terminal",
							"content":"My CprE 488 final project was a team project with three classmates for which we had to use the ZedBoard (and minimal other hardware) to create some sufficiently complex project. We originally chose to make something similar to an early 80's computer that ran BASIC, however porting BASIC to our system was just too much to do in the time we had. So we switched gears to making it run a very simple Assembly-like language.\n\nWe first created a finite state machine in the FPGA hardware that would be able to decode a PS/2 keyboard and put the characters it recieved in memory. Then we programmed an LCD driver in C and created an implementation of the printf() command so we could easily put text on our 16x2 LCD. From there it was a matter of writing the interpreter that would let the user key in a program, list the program, and run it. This was also written in C.\n\nMy contributions to this project were writing the ASM interpreter, creating the keyboard decoding FSM, building the LCD driving circuit, and implementing printf(). I am very happy with how it turned out and I learned a ton about using FPGAs for embedded system prototyping.",
							"images":[
								"images/asm-terminal/final-build.png",
								"images/asm-terminal/pmod-lcd.png",
								"images/asm-terminal/instructions.png"
							]
						},
						{
							"title":"Astronomy Helper App",
							"content":"In my COMS 309 class, I worked with a group of three others to create an Android app in Android Studio. Our app was a sort of \"swiss army knife\" of astronomy information. It would allow you to search for objects in the sky, add them to a list of your favorite objects, and the home page would show a list of your favorite objects that would be visible that night.\n\nI worked on the design and functionality of the UI for this app. This included how the pages flowed from one to another and how information was passed between them. For example, the object information page needed to know which object your tapped on the previous page. All of the object information pages are dynamically generated from large data files included in the app. This is so that all of the critical functionality of the app works without an internet connection. We thought this would be important since astronomers sometimes go to very remote locations which may or may not have service. Things like fetching the Wikipedia page for an object do however require internet.\n\nI continued developing this app by myself after 309 was over since I actually wanted to use it for my own astronomy endeavours. The pictures you see are of the current state of the app. It has been very helpful to be able to see at a glance what objects in the sky I have the best chance of seeing in a given night. It allows me to focus my planning into a few objects rather than spending a bunch of time in a planetarium program looking for things to point my telescope at. I also use the solar system view to know when the best time to photograph certain planets comes around.",
							"images":[
								"images/simple-sky/home.png",
								"images/simple-sky/solar-system.png",
								"images/simple-sky/deep-sky.png",
								"images/simple-sky/saturn.png",
								"images/simple-sky/SimpleSky-Demo-M.gif"
							]
						}
					],
					"images":[
						"images/lead-zeppelin/group.jpg"
					]
				}
			],
			"images":[
				"images/basic-computer/logic-board.jpg"
			]
		},
		{
			"title":"Essays",
			"content":[
				{
					"title":"Ethics Essay",
					"content":"",
					"images":[
						"<iframe src=\"Nathan-Paskach-Ethics-Essay.pdf\" width=\"100%\" height=\"100%\">"
					]
				},
				{
					"title":"Cumulative Reflection",
					"content":"",
					"images":[
						
					]
				},
				{
					"title":"General Education Reflection",
					"content":"",
					"images":[
						
					]
				}
			],
			"images":[
				"images/essays-card-bg.png"
			]
		},
		{
			"title":"Resume",
			"content":"Updated 10-5-2022",
			"images":[
				"images/resume-card-bg.png",
				"<iframe src=\"Nathan-Paskach-Resume.pdf\" width=\"100%\" height=\"100%\">"
			]
		}
	],
	"images":[
		
	]
};