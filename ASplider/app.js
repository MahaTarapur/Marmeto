document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'slide',
      heightRatio: 0.5,
      pagination: true,
      arrows: true,
      cover: true,
      direction: 'ltr',
      arrows:false,
    }).mount();
  });