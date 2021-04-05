//your parameter variables go here!

//Adjust Bezier 1 / Typical range = 0-100
var Bezier1Starty = 100;
var Bezier1Con1y = 0;
var Bezier1Con2y = -200;
var Bezier1Endy = 200;

//Adjust Bezier 2 / Typical range = 0-100
var Bezier2Starty = 100;
var Bezier2Con1y = 0;
var Bezier2Con2y = -200;
var Bezier2Endy = 100;

//Adjust Bezier1 IF / Typical range = 100-200
var Bezier1StartyAdj = 0;
var Bezier1EndyAdj = 200;

//Adjust Bezier2 IF / Typical range = 100-200
var Bezier2StartyAdj = -100;
var Bezier2EndyAdj = 100;

//Adjust Colours / Typical range = -255-255
var BezierColour = 0;
var BezierColourAdj = -255;
var BezierOpacity = 200;
var BezierOpacityAdjust2 = 150;
var BezierOpacityAdj = 200;
var BackgroundR = 83;
var BackgroundG = 224;
var BackgroundB = 156;

// Adjust Increments / Typical range = 0-20
var BezierWeight = 5;
var BezierIncremenents = 2.5;
var BezierIncremenentsAdj = 2.5;
var BezierIncremenentsAdj2 = 1;
var BezierWeightIncrements = .025;
var BezierOpacityIncrements = 2.5;

// Adjust Other / Typical range 0 - 200
var WhileLimit = 500;
var Offset = 50;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 100;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = Offset;
}


function wallpaper_background() {

  background(BackgroundR, BackgroundG, BackgroundB);
}

function my_symbol(x, y) {
  noFill();
  stroke(0);
  symbol(0, 0);
  symbol(0, 100);
}

function symbol(x, y) {

  if (y >= 100) {
    Bezier1Starty = Bezier1StartyAdj;
    Bezier1Endy = Bezier1EndyAdj;
    Bezier2Starty = Bezier2StartyAdj;
    Bezier2Endy = Bezier2EndyAdj;
    BezierIncremenents = BezierIncremenentsAdj;
    BezierOpacity = BezierOpacityAdj;
  } else {
    Bezier1Starty = 0;
    Bezier1Endy = 50;
    Bezier2Starty = 50;
    Bezier2Endy = 50;
    BezierIncremenents = BezierIncremenentsAdj2;
    BezierOpacity = BezierOpacityAdjust2;

  }

  for (var i = 0; i < WhileLimit; i++) {

    var curOffset = BezierIncremenents * i;

    stroke(BezierColour - i * BezierColourAdj, BezierOpacity - i * BezierOpacityIncrements);
    strokeWeight(BezierWeight - (i * BezierWeightIncrements));
    bezier(x, y + Bezier1Starty + curOffset, x + 50, y + Bezier1Con1y + curOffset, x + 50, y + Bezier1Con2y + curOffset, x + 100, y + Bezier2Endy + curOffset);
    bezier(x + 100, y + Bezier2Starty + curOffset, x + 50, y + Bezier2Con1y + curOffset, x + 50, y + Bezier2Con2y + curOffset, x, y + Bezier2Endy + curOffset);
  }


}
