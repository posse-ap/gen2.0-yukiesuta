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




// ライブラリのロード
// name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
google.load('visualization', '1', {'packages':['corechart']});     

// グラフを描画する為のコールバック関数を指定
google.setOnLoadCallback(drawChart);





window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', function(){
    
  });
});

// グラフの描画   
function drawChart() {         
      
  // 配列からデータの生成
  var data = google.visualization.arrayToDataTable([
    ['日付', 'データ'],
    ['',  16.08 ],
    ['2',  14.99 ],            
    ['',  4],
    ['4',  12.98 ], 
    ['',  13.48 ],
    ['6',  13.99 ],
    ['',  15.53 ],
    ['8',  16.08 ],
    ['',  14.99 ],            
    ['10',  4],
    ['',  12.98 ], 
    ['12',  13.48 ],
    ['',  13.99 ],
    ['14',  15.53 ],
    ['',  16.08 ],
    ['16',  14.99 ],            
    ['',  4],
    ['18',  12.98 ], 
    ['',  13.48 ],
    ['20',  13.99 ],
    ['',  15.53 ],
    ['22',  16.08 ],
    ['',  14.99 ],            
    ['24',  4],
    ['',  12.98 ], 
    ['26',  13.48 ],
    ['',  13.99 ],
    ['28',  15.53 ],
    ['',  16.08 ],
    ['30',  14.99 ]
  ]);      

  // 指定されたIDの要素に棒グラフを作成
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

  // グラフの描画
  chart.draw(data,options);
}

 
  
  let options = {
    
    
    legend: {position: 'none'},

    vAxis: {
      format:'#h',
    },



  }

  window.onresize = function(){
    
    drawChart();
    
  }