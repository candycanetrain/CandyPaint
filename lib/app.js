import Paint from "./paint";
import PaintView from "./paintview";

document.addEventListener("DOMContentLoaded", () => {
  // console.log(this);
  // canvasEl.width = Paint.DIM_X;
  // canvasEl.height = Paint.DIM_Y;
    const canvasEl = document.getElementsByTagName("canvas")[0];
    let ctx = canvasEl.getContext("2d");

    // let stage = new createjs.Stage("canvas"); //ctx
    const paint = new Paint();
    new PaintView(canvasEl,ctx).init();


    // let image = new createjs.Bitmap("../assets/images/cartoon_frog.jpeg");
    // stage.addChild(image);
    // createjs.Ticker.addEventListener("tick", handleTick);
    //
    // function handleTick(event) {
    //   this.image.x += 10;
    //   this.stage.update();
    //
    //
    // };
    // }


    // new PaintView(paint, ctx).paintWithImage();

  // }

  //pass Stage to paintview


});
