"use strict";

console.log(a);
const modal_open = document.getElementById("open");
const modal_open_resp = document.getElementById("open_resp");
const modal_close = document.getElementById("close");
const modal = document.getElementById("modal");
const mask = document.getElementById("mask");
const post = document.getElementById("posting");
const load = document.getElementById("loading");
const m_top = document.getElementById("m_top");

// modal_open.addEventListener("click", function () {
  // });
  
  function showModal(){
    modal.style.display = "block";
    mask.style.display = "block";
  }
  
  function modalClose(){
    modal.style.display = "none";
    mask.style.display = "none";
    load.style.display = "none";
  }
  
    document.getElementById("posting").onclick = function(){
      const textbox = document.getElementById("name2")
      const value = textbox.value

      const tweetUrl = "https://twitter.com/intent/tweet?text=" + value;
      console.log(tweetUrl)

      function tweetChecked(){
        open(tweetUrl);
        load.style.display = "none";
      }
  
      if (document.getElementById('check').checked) {
        load.style.display = "block";
        setTimeout(function(){tweetChecked()},2000);
      }else{
        console.log(value);
      }
    };



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}





// ライブラリのロード
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
    ['2',  14.99 ],
    ['4',  12.98 ],
    ['6',  13.99 ],
    ['8',  16.08 ],           
    ['10',  4], 
    ['12',  13.48 ],
    ['14',  15.53 ],
    ['16',  14.99 ],
    ['18',  12.98 ], 
    ['20',  13.99 ],
    ['22',  16.08 ],          
    ['24',  4],
    ['26',  13.48 ],
    ['28',  15.53 ],
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
      height: 600, 
    
  }

  
var dataLabelPlugin = {
  afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
          var dataSum = 0;
          dataset.data.forEach(function (element){
              dataSum += element;
          });

          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // Draw the text in black, with the specified font
                  ctx.fillStyle = 'rgb(255, 255, 255)';

                  var fontSize = 12;
                  var fontStyle = 'normal';
                  var fontFamily = 'Helvetica Neue';
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                  // Just naively convert to string for now
                  var labelString = chart.data.labels[index];
                  var dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";

                  // Make sure alignment settings are correct
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';

                  var padding = 5;
                  var position = element.tooltipPosition();
                  // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                  ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
              });
          }
      });
  }
};


  var ctx = document.getElementById("sircleGrafLanguages1");
  var sircleGrafLanguages= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "その他"], //データ項目のラベル
      datasets: [{
        backgroundColor: [
          "#65ccf9",
          "#2d72b8",
          "#204be3",
          "#55bbda",
          "#aea1ee",
          "#654fe4",
          "#412ce5",
          "#291db9"
        ],
        data: [30, 20, 10, 5, 20, 20, 10] //グラフのデータ
      }]
    },
    options: {
      legend: {position: 'bottom'},
      maintainAspectRatio: false,
      responsive: true,
      layout: { //レイアウトの設定
        padding: {
          left: 30,
          right: 30,
          top: 0,
          bottom: 50
        }
      }
    },
    plugins: [dataLabelPlugin],
  });

  var ctx = document.getElementById("sircleGrafLanguages2");
  var sircleGrafLanguages= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["N予備校", "ドットインストール", "その他",], //データ項目のラベル
      datasets: [{
        backgroundColor: [
          "#65ccf9",
          "#2d72b8",
          "#204be3",
        ],
        data: [30, 20, 10] //グラフのデータ
      }]
    },
    options: {
      legend: {position: 'bottom'},
      maintainAspectRatio: false,
      responsive: true,
      layout: { //レイアウトの設定
        padding: {
          left: 30,
          right: 30,
          top: 0,
          bottom: 50
        }
      }
    },
    plugins: [dataLabelPlugin],
  });

