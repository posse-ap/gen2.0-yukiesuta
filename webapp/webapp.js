"use strict";
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

  const textBox = document.getElementById("name")
  const value = textBox.value
  const tweetUrl = "https://twitter.com/intent/tweet?text=" + value;

  console.log(document.getElementById("name").value);

  document.getElementById("posting").onclick = function(){
    // window.location.href = tweetUrl;
    console.log(document.getElementById("name").value);
    console.log(value)
  };