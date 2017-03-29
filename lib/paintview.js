//paint view to animate
//rendering
//brush can handle logic

class PaintView {
  constructor(paint, ctx) {
    this.ctx = ctx;

    this.paint = paint;
    this.penDown = false;
    this.lineStarted = false;
    this.brush = undefined;


    this.downEvent = 'mousedown';
    this.moveEvent = 'mousemove';
    this.upEvent = 'mouseup';

  }

  // onDownEvent(e) {
  //   e.preventDefault();
  //   this.penDown = true;
  // }

  onMoveEvent(e) {
    e.preventDefault();
    if (!this.penDown)
      return;
    let pos = this.getMousePos(e);

    if (!this.lineStarted){
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
      this.lineStarted = true;
    } else {
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    }
  }

  onUpEvent(e) {
    e.preventDefault();
    this.penDown = false;
    this.lineStarted = false;
  }
  onDownEvent(e) {
    e.preventDefault();
    this.penDown = true;
  };

  getMousePos(e) {
    const canvasEl = document.getElementsByTagName("canvas")[0];

    let rect = canvasEl.getBoundingClientRect();
    return {
      x : e.clientX - rect.left,
      y : e.clientY - rect.top
    };
  }


  init() {
    // this.stage = new createjs.Stage("canvas");
    debugger
    // this.stage.addEventListener("stagemousedown", function(event) {
    //   alert("THE CANVAS WAS CLICKED at " + event.stageX+", "+event.stageY);
    // })
    // this.frog = new createjs.Stage
    this.brush = document.getElementById("frogjpeg");

    const canvasEl = document.getElementsByTagName("canvas")[0];

    // canvasEl.addEventListener("mousemove", (e) => {
    //   this.getMousePos('move',e);
    // }, false);
    //START HERE
    canvasEl.onmousedown = (e) => {
      e.preventDefault();
      this.penDown = true;
    };

    canvasEl.onmousemove = (e) => {
      if (!this.penDown) return;
      let rect = canvasEl.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      this.ctx.drawImage(this.brush, x, y);
    };

    canvasEl.onmouseup = (e) => {
      if (this.penDown) {
        this.penDown = false;
      }
    };
    //end here
    // canvasEl.onmouseup = function(e){
    //   canvasEl.onmousemove = null;
    // }
    // canvasEl.onmousedown("stagemousedown", (e) => {
    //   alert("the canvas was clicked at");
    // });
    // canvasEl.addEventListener("mousedown", this.onDownEvent.bind(this), false);
    // canvasEl.addEventListener("mousemove", this.onMoveEvent.bind(this), false);
    // canvasEl.addEventListener("mouseup", this.onUpEvent.bind(this), false);

  }



    // img.onload = function() {
    // stage.drawImage(img, 0, 0);
    // stage.beginPath();
    // stage.moveTo(30, 96);
    // stage.lineTo(70, 66);
    // stage.lineTo(103, 76);
    // stage.lineTo(170, 15);
    // stage.stroke();


  // paintWithImage() {
  //   const canvasEl = document.getElementsByTagName("canvas")[0];
  //   // let ctx = canvasEl.getContext("2d");
  //   debugger
  //   let img=document.getElementById("frogjpeg");
  //   this.ctx.drawImage(img,10,10);
  // }
  //
  // copy() {
  //   let ctx = canvasEl.getContext("2d");
  //   let imgData = ctx.getImageData()
  // }
}

module.exports = PaintView;
