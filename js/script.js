$(".slide-items").slick({
    autoplay: true, // 自動再生
    arrows: true, // 矢印
    dots: true, // インジケーター
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            dots: false,
          }
        },
      ]
    });  

