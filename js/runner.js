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

var game = new Phaser.Game(1024, 640, Phaser.AUTO, 'runner', { preload: preload, create: create, update: update });

function preload() {


//MAP
    game.load.tilemap('allMap1', 'assets/map/allMap11.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tileset', 'assets/tileset00.png');

//RUNNER
    game.load.spritesheet('runner_an', 'assets/an_r_run.png', 76, 104);


}

var map;
var groundLayer;
var harmerLayer;
var cursors;
var run;
var runner;

function create() {

  game.stage.backgroundColor = '#DCDCDC';

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 1500;

  map = game.add.tilemap('allMap1');
  map.addTilesetImage('tileset00', 'tileset');
    
  groundLayer = map.createLayer('groundLayer');
  groundLayer.resizeWorld();

  harmerLayer = map.createLayer('harmerLayer');

  runner = game.add.sprite(150, 200, 'runner_an');
  run = runner.animations.add('running');
  runner.animations.play('running', 15, true);

  game.camera.follow(runner);


  game.physics.enable(runner);
  game.physics.enable(groundLayer);
  game.physics.enable(harmerLayer);

  map.setCollisionBetween(0, 1000, true, groundLayer);
  map.setCollisionBetween(0, 1000, true, harmerLayer);



  //runner.body.collideWorldBounds = false;

  cursors = game.input.keyboard.createCursorKeys();

}

var jumptimer = 0;

function update() {

  game.physics.arcade.collide(runner,groundLayer/*,harmerLayer*/);
  //game.physics.arcade.collide(harmerLayer);

  runner.body.velocity.x = 500;
  
  // if (cursors.up.isDown && (runner.body.onFloor() || runner.body.touching.down))
  //   {
  //       console.log('jump')
  //       runner.body.velocity.y = -350;
  //       //runner.body.velocity.x = 500;
  //   }

  if (cursors.up.isDown && (runner.body.onFloor() || runner.body.touching.down)){   
    jumptimer = 1;
    runner.body.velocity.y = -350;
    } else if (cursors.up.isDown && (jumptimer != 0)){ 
    if (jumptimer > 30){
    jumptimer = 0;
    } else { 
    jumptimer++;
    runner.body.velocity.y = -350;
    }
    } else if (jumptimer != 0) { 
    jumptimer = 0;
    }

  // if (cursors.up.isDown && (runner.body.onFloor() || runner.body.touching.down))
  // {
  //   jumptimer = game.time.time;
  //   console.log('jump');
  //   runner.body.velocity.y = -550;
  // }
  // else if (cursors.up.isDown && (jumptimer != 0))
  // { 
  //   if (jumptimer > 1000) {jumptimer = 0;}
  //   else {runner.body.velocity.y = -550;}
  // } 
  //   else if (jumptimer != 0) {jumptimer = 0;}
}