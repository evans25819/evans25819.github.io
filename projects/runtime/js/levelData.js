var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        currentLevel: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 6300, y: groundY -50 },
          { type: "sawblade", x: 400, y: groundY -50 },
          { type: "sawblade", x: 830, y: groundY -50 },
          { type: "sawblade", x: 730, y: groundY -50 },
          { type: "enemy", x: 550, y: groundY -50 },
          { type: "enemy", x: 1160, y: groundY -50 },
          { type: "enemy", x: 250, y: groundY -50 },
          { type: "enemy", x: 750, y: groundY -50 },
          { type: "enemy", x: 1170, y: groundY -50 },
          { type: "reward", x: 950, y: groundY -50 },          
          { type: "reward", x: 1155, y: groundY -50 },
          { type: "reward", x: 650, y: groundY -50 },
          { type: "marker", x: 1150, y: groundY -50 },
        ],
      },
      {
        name: "Robot Rampage",
        currentLevel: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 6300, y: groundY -50 },
          { type: "sawblade", x: 400, y: groundY -50 },
          { type: "sawblade", x: 830, y: groundY -50 },
          { type: "sawblade", x: 730, y: groundY -50 },
          { type: "enemy", x: 550, y: groundY -50 },
          { type: "enemy", x: 1160, y: groundY -50 },
          { type: "enemy", x: 250, y: groundY -50 },
          { type: "enemy", x: 750, y: groundY -50 },
          { type: "enemy", x: 1170, y: groundY -50 },
          { type: "reward", x: 950, y: groundY -50 },          
          { type: "reward", x: 1155, y: groundY -50 },
          { type: "reward", x: 650, y: groundY -50 },
          { type: "marker", x: 1150, y: groundY -50 },




        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
