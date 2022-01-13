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

// 東京or広島
  // prepare:ただ文章（変数込みのsql文を用意する ：の後に後で代入する
  $Title = $dbh->prepare('SELECT * FROM questions WHERE big_question_id = :big_question_id');
  // execute()が代入を実行（データベースから分取ってくる）する、引数に配列を入れる
  $Title->execute(array(':big_question_id'=>$_REQUEST['big_question_id']));
  // fetchは1行目だけを取ってくる（配列１こ）、fetchAllは全部取ってくる（二次元配列）
  $Titles = $Title->fetch();

// 東京の選択肢
$tokyo_choice = $dbh->prepare('SELECT * FROM tokyo_choices WHERE tokyo_choices_id = :tokyo_choices_id');
$tokyo_choice->execute(array('tokyo_choices_id'=>$_REQUEST['tokyo_choices_id']));
$tokyo_choices = $tokyo_choice->fetch();


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
        繰り返し表示される文章
      </div>
      <?php } ?>

      <?php print_r($tokyo_choices) ?>
      
      <?php  print_r($Titles) ?>
      
      <h3>ガチで
        <?= $Titles[1] ?>
        <?= $tokyo_choices[1] ?>
        の人しか解けない！ #
        <?php echo htmlspecialchars($_GET["big_question_id"]);?>
        </h3>
    <script type="text/javascript" src="/js/quizy.js"></script>
  </body>
</html>
