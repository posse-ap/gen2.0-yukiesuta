<?php // データベースに接続するために必要なデータソースを変数に格納
  // mysql:host=ホスト名;dbname=データベース名;charset=文字エンコード
$dsn = 'mysql:host=db;dbname=quizy;charset=utf8';
 
  // データベースのユーザー名
$user = 'yukiho';
 
  // データベースのパスワード
$password = 'password';

echo phpinfo();
 
// tryにPDOの処理を記述
try {
 
  // PDOインスタンスを生成
  $dbh = new PDO($dsn, $user, $password);
 
// エラー（例外）が発生した時の処理を記述
} catch (PDOException $e) {
 
  // エラーメッセージを表示させる
  echo 'データベースにアクセスできません！' . $e->getMessage();
 
  // 強制終了
  exit;
 
}

?>

<!DOCTYPE html>
<html lang="jp">
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
      <h3>ガチで東京の人しか解けない！<?= "hoje"; ?> #東京の難読地名クイズ</h3>
    </div>
    <?php } ?>
    <script type="text/javascript" src="/js/quizy.js"></script>
  </body>
</html>
