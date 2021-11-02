"use strict";

// import flatpickr from 'flatpickr/dist/flatpickr.min.js';
// import { Japanese } from "flatpickr/dist/l10n/ja.js" //日本語用モジュール

// flatpickr('#js-datepicker', {
//     locale : Japanese, // 日本語用モジュールを適用
//     dateFormat : 'Y.m.d（D）', // 2021.05.24（月）の形式で表示
//     defaultDate : new Date() // 入力エリアの初期値
//   });

const modal_open = document.getElementById("open");
const modal_open_resp = document.getElementById("open_resp");
const modal_close = document.getElementById("close");
const modal = document.getElementById("modal");
const mask = document.getElementById("mask");
const post = document.getElementById("posting");
const load = document.getElementById("loading");
const m_top = document.getElementById("m_top");

modal_open.addEventListener("click", function () {
  modal.style.display = "block";
  mask.style.display = "block";
});

modal_close.addEventListener("click", function () {
  modal.style.display = "none";
  mask.style.display = "none";
});

mask.addEventListener("click", function () {
  modal.style.display = "none";
  mask.style.display = "none";
});

modal_open_resp.addEventListener("click", function () {
  modal.style.display = "block";
  mask.style.display = "block";
  body.style.display = "none";

  // document.getElementsByClassName('modal').style.display = "block";
  // console.log(document.getElementsByClassName('modal').style.display = "block");
  // mask.classList.remove('hidden');
});

modal_close.addEventListener("click", function () {
  modal.style.display = "none";
  mask.style.display = "none";
});

mask.addEventListener("click", function () {
  modal.style.display = "none";
  mask.style.display = "none";
});

post.addEventListener("click", function () {
  load.style.display = "block";
  m_top.style.display = "none";
  post.style.display = "none";
});


var ctx2 = document.getElementById("yourchart");

var yourChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#f88", "#484", "#48f"],
        weight: 100,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});

var ctx3 = document.getElementById("hischart");

var yourChart = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#f88", "#484", "#48f"],
        weight: 100,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});
