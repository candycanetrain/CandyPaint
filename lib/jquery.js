function addIcons() {
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
}

function rangeSlider() {
  let slider = $('.slider'),
      range = $('.slider-range'),
      value = $('.slider-value');

  slider.each(function(){

    value.each(function(){
      let value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
}

function modalLogic() {
  let modal = document.getElementById('optionsModal');
  let openBtn = document.getElementById('open');
  let closeBtn = document.getElementById('close');

  openBtn.onclick = function() {
    modal.style.display = "block";
  };

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display="none";
    }
  }

}
