let arrow = document.querySelectorAll('.arrow'),
button = document.querySelectorAll('.tag');


console.log(button);

for (let i = 0; i < arrow.length; i++) {
    let arr = arrow[i];
    arr.addEventListener('click', function (e) {
      console.log('нажатие на кнопку смены слайда' );
    });
  }

for (let i = 0; i < button.length; i++) {
    let but = button[i];
    but.addEventListener('click', function (e) {
      console.log('нажатие на кнопку перемешивания картинок' );
    });
  }


  function changeImage() {

  };
  function pushArrow() {

};