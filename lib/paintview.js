//paint view to animate
//rendering
//brush can handle logic

class PaintView {
  constructor(canvasEl, ctx, imgs) {
    this.ctx = ctx;

    this.canvas = canvasEl;
    this.penDown = false;
    this.lineStarted = false;
    this.brush = undefined;
    this.lastValue = "";

    this.downEvent = 'mousedown';
    this.moveEvent = 'mousemove';
    this.upEvent = 'mouseup';

    this.imgs = imgs;

    this.temp = undefined;
    this.draw = this.draw.bind(this);
  }

  // onDownEvent(e) {
  //   e.preventDefault();
  //   this.penDown = true;
  // }

///this is for drawing with pen brush
  // onMoveEvent(e) {
  //   // debugger
  //   e.preventDefault();
  //   if (!this.penDown)
  //     return;
  //   let pos = this.getMousePos(e);
  //
  //   if (!this.lineStarted){
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(pos.x, pos.y);
  //     this.lineStarted = true;
  //   } else {
  //     this.ctx.lineTo(pos.x, pos.y);
  //     this.ctx.stroke();
  //   }
  // }
  //
  // onUpEvent(e) {
  //   e.preventDefault();
  //   this.penDown = false;
  //   this.lineStarted = false;
  // }
  // onDownEvent(e) {
  //   e.preventDefault();
  //   this.penDown = true;
  // };
  ///end of drawing with pen brush

  getMousePos(e) {
    const canvasEl = document.getElementsByTagName("canvas")[0];

    let rect = canvasEl.getBoundingClientRect();
    return {
      x : e.clientX - rect.left,
      y : e.clientY - rect.top
    };
  }

  onClear(e) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setBrush(id, e) {
    // debugger
    e.preventDefault();
    // let icon = new Image(100,100);
    // icon.src = "../assets/images/toad.png";
    this.brush = document.getElementById(id);

    // debugger

  }

  onSave() {
    // debugger
    this.temp = document.getElementById("canvas").toDataURL('temp/png');
      // this.ctx.save();
    // let dataURL = this.canvas.
    // document.getElementById('canvas').src = dataURL;
  }

  onRestore() {
    // this.ctx.restore();
    debugger
    this.ctx.putImageData(this.temp,0, 0);

  }

  setBrushFromDropdown() {
    let dropdown = document.getElementById("dropdownMenu");
    if (dropdown.value != this.lastValue) {
      this.setBrush(dropdown.value);
      this.lastValue = dropdown.value;
    } else {
      this.lastValue = "";
    }
    // this.brush = document.getElementById(dropdown.value);
  }

  draw(x, y, width, opacity) {
    let newHeight = this.brush.height * (width/this.brush.width);
    // let newWidth = this.brush.height * ratio/100;
    let adjustedOpacity = opacity/100;
    this.ctx.globalAlpha = adjustedOpacity;
    this.ctx.drawImage(this.brush, x - width/2, y - newHeight/2, width, newHeight);
  }

  init() {
    // this.stage = new createjs.Stage("canvas");
    // debugger
    // this.stage.addEventListener("stagemousedown", function(event) {
    //   alert("THE CANVAS WAS CLICKED at " + event.stageX+", "+event.stageY);
    // })
    // this.frog = new createjs.Stage


    const canvasEl = document.getElementsByTagName("canvas")[0];
    const clearButton = document.getElementById("clear-canvas");
    const saveButton = document.getElementById("save-canvas");
    const restoreButton = document.getElementById("restore-canvas");
    // const dropdown = document.getElementById("dropdownMenu");
    // const toad = document.getElementById("toad-option");
    // const marioFireball = document.getElementById("mario-fireball-option");
    // toad.addEventListener('click', this.setBrush.bind(this, toad.value));
    // marioFireball.addEventListener('click', this.setBrush.bind(this, marioFireball.value));

    // dropdownMenu.addEventListener('click', this.setBrushFromDropdown.bind(this));
    // $(".dropdown img.brush").addClass("brushvisibility");
    //   $(".dropdown dt a").click( () => {
    //
    //   })
    this.imgs.forEach(img => {
      img.addEventListener('click', this.setBrush.bind(this,img.id));
    });

    clearButton.addEventListener('click', this.onClear.bind(this));
    saveButton.addEventListener('click', this.onSave.bind(this));
    restoreButton.addEventListener('click', this.onRestore.bind(this));
    // canvasEl.addEventListener("mousemove", (e) => {
    //   this.getMousePos('move',e);
    // }, false);
    //START HERE
    canvasEl.onmousedown = (e) => {
      e.preventDefault();
      this.penDown = true;
      let rect = canvasEl.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let size = $('#size').val();
      let opacity = $('#opacity').val();
      this.draw(x, y, size, opacity);
    };

    canvasEl.onmousemove = (e) => {
      if (!this.penDown) return;
      let rect = canvasEl.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let size = $('#size').val();
      let opacity = $('#opacity').val();
      this.draw(x, y, size, opacity);
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
