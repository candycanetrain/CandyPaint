import PaintView from "./paintview";
import lo from "lodash";

document.addEventListener("DOMContentLoaded", () => {
  // console.log(this);
  // canvasEl.width = Paint.DIM_X;
  // canvasEl.height = Paint.DIM_Y;
    const canvasEl = document.getElementsByTagName("canvas")[0];
    let ctx = canvasEl.getContext("2d");
    const all_icons = document.getElementById("brush-toolbox").getElementsByTagName("img");
    const all_icons_array = lo.toArray(all_icons);
    // let stage = new createjs.Stage("canvas"); //ctx
    new PaintView(canvasEl,ctx, all_icons_array).init();


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
