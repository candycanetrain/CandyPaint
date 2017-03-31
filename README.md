# Production Readme

[Candy's Mario Paint live](https://candycanetrain.github.io/CandyPaint/)

Candy's Mario Paint is a personal project of mine, written in HTML/Canvas, JavaScript, and CSS. It was inspired by my memory of playing the super cool Mario Paint game on Super Nintendo when I was a kid.

## Features & Implementation

The app allows you to choose an image from a preset toolbox and use it as a brush.

### Using images as brushes

Painting on the canvas using images is relatively simple. The slightly complicated part was registering when the user clicks vs when the user wants to drag the brush.

The cool part was implementing a way to render images to the toolbox in a DRY, efficient way. I wrote a function to add the images to an array, then
appended each image with a specified size to the toolbox. I also used this iteration method add an EventListener so that users can click on a brush and change the brush immediately.

I wrote this method so that users can eventually upload their own images to use as brushes.

Here is the code:

```
let imgs = [];

for(let i = 0; i < 20; i += 1) {
  imgs.push( new Image() );
  imgs[i].src = "./assets/images/icons/" + "icon_" + i + ".png";
}

imgs.forEach(function(img, idx) {
  let toolbox = document.getElementById("brush-toolbox");
  img.setAttribute("height", "65");
  img.setAttribute("id", "icon_"+idx);
  toolbox.appendChild(img);
});
```


### Brush settings

Clicking on the "Brush settings" button opens up a modal that allows you to change the size and opacity of the brush.

### Clearing the canvas

For now, you can clear the canvas. Eventually, you will be able to save a session, restore it, and undo changes.


## In the near future:

As mentioned above, I plan to allow the user to save and restore a session, undo/redo actions, and upload custom pictures to use as brush.
