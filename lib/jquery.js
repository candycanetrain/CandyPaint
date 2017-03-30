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
};
