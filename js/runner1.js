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

var game = new Phaser.Game(1024, 640, Phaser.AUTO, 'runner', { preload: preload, create: create });

function preload() {


//MAP
    game.load.tilemap('map01', 'assets/map/singles/02.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tileset00.png');

//RUNNER
    

}

var map;
var layer;

function create() {

    game.stage.backgroundColor = '#DCDCDC';

    map = game.add.tilemap('map01');

    map.addTilesetImage('tileset00', 'tiles');
    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('Tile Layer 1');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();

}