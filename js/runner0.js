/*
       ___          ___          ___          ___          ___          ___                    ___      ___     
      /\  \        /\__\        /\__\        /\__\        /\  \        /\  \                  /\  \    /\  \    
     /::\  \      /:/  /       /::|  |      /::|  |      /::\  \      /::\  \                 \:\  \  /::\  \   
    /:/\:\  \    /:/  /       /:|:|  |     /:|:|  |     /:/\:\  \    /:/\:\  \            ___ /::\__\/:/\ \  \  
   /::\~\:\  \  /:/  /  ___  /:/|:|  |__  /:/|:|  |__  /::\~\:\  \  /::\~\:\  \   ___   /\  /:/\/__/ \:\~\ \  \ 
  /:/\:\ \:\__\/:/__/  /\__\/:/ |:| /\__\/:/ |:| /\__\/:/\:\ \:\__\/:/\:\ \:\__\ /:\ \ \:\/:/  /  /\  \:\ \ \__\
  \/_|::\/:/  /\:\  \ /:/  /\/__|:|/:/  /\/__|:|/:/  /\:\~\:\ \/__/\/_|::\/:/  / \:/_/  \::/  /   \:\  \:\ \/__/
     |:|::/  /  \:\  /:/  /     |:/:/  /     |:/:/  /  \:\ \:\__\     |:|::/  /          \/__/     \:\  \:\__\  
     |:|\/__/    \:\/:/  /      |::/  /      |::/  /    \:\ \/__/     |:|\/__/                      \:\/:/  /  
     |:|  |       \::/  /       /:/  /       /:/  /      \:\__\       |:|  |                         \::/  /   
      \|__|        \/__/        \/__/        \/__/        \/__/        \|__|                          \/__/    

*/
 

//PROPERTIES 
var gameProperties = {
    screenWidth: 1024,
    screenHeight: 640,
};


//STATES
var states = {
    game: "game",
};

//GAMESTATE
var gameState = function(game){
    
};

gameState.prototype = {

//PRELOAD
    preload: function () {
		this.game.load.spritesheet('runner_run', 'assets/an_runner_run.png', 76, 104);
  		this.game.load.tilemap('tilemap', 'assets/map/singles/01.json', null, Phaser.Tilemap.TILED_JSON);
    	this.game.load.image('tiles', 'assets/tileset00.png');       
    },
    
//CREATE
    create: function () {
		//Start the Arcade Physics systems
    	this.game.physics.startSystem(Phaser.Physics.ARCADE);
 	
    	//Change the background colour
    	this.game.stage.backgroundColor = "#DCDCDC";
 	
    	//Add the tilemap and tileset image. The first parameter in addTilesetImage
    	//is the name you gave the tilesheet when importing it into Tiled, the second
    	//is the key to the asset in Phaser
    	this.map = this.game.add.tilemap('tilemap');
    	this.map.addTilesetImage('tileset00', 'tiles');
 	
    	//Add both the background and ground layers. We won't be doing anything with the
    	//GroundLayer though
//    	this.backgroundlayer = this.map.createLayer('BackgroundLayer');
    	this.groundLayer = this.map.createLayer('Tile Layer 1');
 	
    	//Before you can use the collide function you need to set what tiles can collide
    	this.map.setCollisionBetween(1, 100, true, 'Tile Layer 1');
 	
    	//Add the sprite to the game and enable arcade physics on it
    	this.sprite = this.game.add.sprite(50, this.game.world.centerY, 'runner_run');
    	this.game.physics.arcade.enable(this.sprite);
 	
    	//Change the world size to match the size of this layer
    	this.groundLayer.resizeWorld();
 	
    	//Set some physics on the sprite
//    	this.sprite.body.bounce.y = 0.2;
    	this.sprite.body.gravity.y = 2000;
    	this.sprite.body.gravity.x = 20;
    	this.sprite.body.velocity.x = 100;
 	
    	//Create a running animation for the sprite and play it
    	this.sprite.animations.add('run',30, true);
    	this.sprite.animations.play('run');
 	
    	//Make the camera follow the sprite
    	this.game.camera.follow(this.sprite);
 	
    	//Enable cursor keys so we can create some controls
    	this.cursors = this.game.input.keyboard.createCursorKeys();
    },

//UPDATE
    update: function () {
    	//Make the sprite collide with the ground layer
    	this.game.physics.arcade.collide(this.sprite, this.groundLayer);
 
    	//Make the sprite jump when the up key is pushed
    	if(this.cursors.up.isDown) {
    	  this.sprite.body.velocity.y = -500;
   		}      
    },
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

game.state.add(states.game, gameState);

game.state.start(states.game);