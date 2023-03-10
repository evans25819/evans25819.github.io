$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(440, 300, 300, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(150, 700, 300, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(240, 300, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(500, 600, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(140, 500, 300, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    createCollectable("steve", 200, 660, 80, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 300, 550); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("kennedi", 500, 430); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

    createCannon("left", 420, 1000); // cannon on left wall, 600px down, shooting three per second
    createCannon("left", 240, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 500, 1000); // cannon on left wall, 600px down, shooting once per second





    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
