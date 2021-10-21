'use strict';

  const modal_open = document.getElementById('open');
  const modal_open_resp = document.getElementById('open_resp');
  const modal_close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  modal_open.addEventListener('click', function () {

    modal.style.display ="block";
    mask.style.display = "block";
  });

  modal_close.addEventListener('click', function () {
    modal.style.display ="none";
    mask.style.display = "none";
  });

  mask.addEventListener('click', function () {
    modal.style.display ="none";
    mask.style.display = "none";
  });



  modal_open_resp.addEventListener('click', function () {

    modal.style.display ="block";
    mask.style.display = "block";
    body.style.display ="none"

    // document.getElementsByClassName('modal').style.display = "block";
    // console.log(document.getElementsByClassName('modal').style.display = "block");
    // mask.classList.remove('hidden');
  });

  modal_close.addEventListener('click', function () {
    modal.style.display ="none";
    mask.style.display = "none";
  });

  mask.addEventListener('click', function () {
    modal.style.display ="none";
    mask.style.display = "none";
  });


