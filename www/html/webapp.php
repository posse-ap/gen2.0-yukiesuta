<?php
include dirname(__FILE__) . '/dbconnect.php';
// $study_language_result = $dbh->query("SELECT * FROM study_languages")->fetchALL(PDO::FETCH_ASSOC);


// shuffle($study_language_result);
// foreach($study_language_result as $result){
//     echo $result['color'].PHP_EOL;
// }

$study_datum = $dbh->query("SELECT * FROM study_data")->fetchAll(PDO::FETCH_ASSOC);
print_r($study_datum);


$today_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data WHERE DATE_FORMAT(study_date, '%Y%m%d') = DATE_FORMAT(now(), '%Y%m%d')")->fetch(PDO::FETCH_ASSOC);

if(!($today_study_time_result ['SUM(study_hour)'])){
    $today_study_time_result ['SUM(study_hour)'] = 0 ;
};

$month_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data WHERE DATE_FORMAT(study_date, '%Y%m') = DATE_FORMAT(now(), '%Y%m')")->fetch(PDO::FETCH_ASSOC);

$total_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data")->fetch(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=print_r($today_study_time_result ['SUM(study_hour)'] );?></title>
    
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@next/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js"
    integrity="sha512-VMsZqo0ar06BMtg0tPsdgRADvl0kDHpTbugCBBrL55KmucH6hP9zWdLIWY//OTfMnzz6xWQRxQqsUFefwHuHyg=="
    crossorigin="anonymous"></script>
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
    <link href="webapp.css?v=<?=date('Y_m_d_H_i_s');?>" rel="stylesheet">
    <link href="webapp_resp.css?v=<?=date('Y_m_d_H_i_s');?>" rel="stylesheet">
    
    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    
    
    <script src="https://www.google.com/jsapi"></script>
    
    
</head>
<body>
    <header>
        <div class="header_container">
            <div><img src="img/posseLogo.png" alt="logo" class="logo"></div>
            <div class="week">4th week</div>
            <div class="link c_pointer" id="open" onclick="showModal()">記録・投稿</div>
        </div>
    </header>
    <div class="all_container">
        <div class="main">
            <div class="main_first_container">
                <div class="hour">
                    <div class="hour_box"><span class="period">Today</span><br><span class="figure"><?=($today_study_time_result ['SUM(study_hour)'] )?></span><br><span class="unit">hour</div>
                        <div class="hour_box"><span class="period">Month</span><br><span class="figure"><?=($month_study_time_result ['SUM(study_hour)'] )?></span><br><span class="unit">hour</div>
                            <div class="hour_box"><span class="period">Total</span><br><span class="figure"><?=($total_study_time_result ['SUM(study_hour)'] )?></span><br><span class="unit">hour</div>
                            </div>
                            <div class="bar_graph">
                                <div id="chart_div"></div>
                            </div>
                        </div>
                        <div class="main_second_container">
                            <div class="pie_container">
                                <!-- <div  class="pie" id="piechart" >
                                    <canvas canvas id="myDoughnutChart1"></canvas>
                                    はんれーかく
                                </div> -->
                                <canvas id="sircleGrafLanguages1"></canvas>
                            </div>
                            <div class="pie_container">
                                <!-- <div class="pie" id="pie_graph2" >
                                    <canvas id="myDoughnutChart2"></canvas>
                                    はんれーかく
                                </div> -->
                                <canvas id="sircleGrafLanguages2"></canvas>
                            </div>
                        </div>
                        <div class="link_resp c_pointer" id="open_resp" onclick="showModal()"><p>記録・投稿フォーム</p></div>
                    </div>
                    <div class="bottom_month">2020年 10月</div>
                    <div id="modal" class="modal">
                        <div class="modal_close c_pointer" id="close" onclick="modalClose()">
                            ×
                        </div>
                        <div class="loading" id="loading">
                            <!-- <img src="img/loading.png" class="loading_circle"> -->
                            <div class="loading_stmt">now loading</div>
                        </div>
                        <div class="modal_top" id="m_top">
                            <div class="modal_first_container">
                                <div class="study_day">
                                    <dt>学習日</dt>
                                    <dd><input type="date"></dd>
                                </div>
                                <div class="study_contents">
                                    <dt>学習コンテンツ（複数選択可）</dt>
                                    <ul class="modal_contents">
                                        <dd><li class="modal_contents_option c_pointer"><input type="checkbox"  name="check" value="" />   N予備校</li></dd>
                                        <dd><li class="modal_contents_option c_pointer"><input type="checkbox"  name="check" value="" />   ドットインストール</li></dd>
                                        <dd><li class="modal_contents_option c_pointer"><input type="checkbox"  name="check" value="" />   POSSE課題</li></dd>
                                    </ul>
                                </div>
                                <div class="study_language">
                                    <dt>学習言語（複数選択可）</dt>
                                    <ul class="modal_language">
                                        <dd><li class="modal_language_option c_pointer"> <input type="checkbox"  name="check" value="true" />  HTML</li></dd>
                                        <dd><li class="modal_language_option c_pointer">  <input type="checkbox"  name="check" value="" /> CSS</li></dd>
                                        <dd><li class="modal_language_option c_pointer"> <input type="checkbox"  name="check" value="" />  javascript</li></dd>
                                        <dd><li class="modal_language_option c_pointer"> <input type="checkbox"  name="check" value="" />  PHP</li></dd>
                                        <dd><li class="modal_language_option c_pointer">  <input type="checkbox"  name="check" value="" /> Laravel</li></dd>
                                        <dd><li class="modal_language_option c_pointer">  <input type="checkbox"  name="check" value="" /> SQL</li></dd>
                                        <dd><li class="modal_language_option c_pointer">  <input type="checkbox"  name="check" value="" /> SHELL</li></dd>
                                        <dd><li class="modal_language_option c_pointer">  <input type="checkbox"  name="check" value="" /> 情報システム基礎知識</li></dd>
                                    </ul>
                                </div>
                            </div>
                            <div class="modal_second_container">
                                <div class="study_time">
                                    <dt><label for="name">学習時間</label></dt>
                                    <dd><input id="name" type="text"></dd>
                                </div>
                                <div class="twitter_comment">
                                    <dt><label for="name">twitter用コメント</label></dt>
                                    <dd><input id="name2" type="text"></dd>
                    </div>
                    <div class="twitter_share">
                        <input type="checkbox" id="check" name="check" value= true /> 
                        <div>twitterにシェアする</div>
                        
                    </div>
                </div>
            </div>
            <p class="modal_bottom c_pointer" id="posting" >記録・投稿</p>
        </div>
        <div class="mask c_pointer" id="mask" onclick="modalClose()"></div>
    </div>



<?php
$study_datum = $dbh->query("SELECT * FROM study_data")->fetchAll(PDO::FETCH_ASSOC);
$study_datum_array = json_encode($study_datum);
?>

    <script>
    let js_array = <?= $study_datum_array; ?>;
    console.log(js_array[9]['study_hour']); 
</script>

<script type="text/javascript" src="webapp.js">
</script>
</body>
</html>
