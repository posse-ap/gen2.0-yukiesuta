<?php // データベースに接続するために必要なデータソースを変数に格納
  // mysql:host=ホスト名;dbname=データベース名;charset=文字エンコード
$dsn = 'mysql:host=db;dbname=quizy;charset=utf8';
  // データベースのユーザー名
$user = 'yukiho';
  // データベースのパスワード
$password = 'password';
// echo phpinfo();
// tryにPDOの処理を記述
try {
  // PDOインスタンスを生成
  $dbh = new PDO($dsn, $user, $password);
  echo 'データベースにアクセスしました！' ;
// エラー（例外）が発生した時の処理を記述
} catch (PDOException $e) {
  // エラーメッセージを表示させる
  echo 'データベースにアクセスできません！' . $e->getMessage();
  // 強制終了
  exit;
}


// 12/31 
// データベースに接続してurl毎に表示内容を変える操作
// print_rで確認してみたけど、配列は取得できてた。select文はOK？？
// 65行目あたりのDatasの取得ができていない？？
// でもprint_rで表示される配列おかしくない？？？

$Data = $dbh->prepare('SELECT * FROM questions WHERE big_question_id = :big_question_id');
$Data->execute(array('big_question_id'=>$_REQUEST['big_question_id']));
// fetchは1行目だけを取ってくる（配列１こ）、fetchAllは全部取ってくる（二次元配列）
$Datas = $Data->fetch();


echo($_REQUEST['big_question_id']);

print_r($Datas);



?>

<!DOCTYPE html>
<html lang="ja">
  <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>kuizy</title>
  <link rel="stylesheet" href="/css/quizy.css" />
  </head>
  <body>
    <?php for ($i=0; $i < 3; $i++) { ?>
      <div class="contain">
        <!-- <?php print($hyouji['']);?> -->
      </div>
      <?php } ?>
      
      <h3>ガチで
        <?= $Datas[1] ?>
        <!-- <?php echo htmlspecialchars($_GET["id"]) ;?> -->
        の人しか解けない！ #
        <?php echo htmlspecialchars($_GET["big_question_id"]);?>
        <!-- <?php print($Datas["big_question_id"]);?> -->
        </h3>

    




    <script type="text/javascript" src="/js/quizy.js"></script>
  </body>
</html>
