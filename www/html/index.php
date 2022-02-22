<?php 
    // データベースに接続するために必要なデータソースを変数に格納
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
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'データベースにアクセスしました！' ;
      // エラー（例外）が発生した時の処理を記述
  } catch (PDOException $e) {
      // エラーメッセージを表示させる
    echo 'データベースにアクセスできません！' . $e->getMessage();
      // 強制終了
    exit;
  }
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
    <?php 
  
  // urlの値を取得
  $id = $_GET["id"];
  
  $stmt = $dbh->query("SELECT * FROM big_questions WHERE id = $id" );
  $result = $stmt->fetch(PDO::FETCH_ASSOC);
  
  $question_id_stmt = $dbh->query("SELECT question_id FROM choices WHERE prefecture_id = $id");
  $question_id_result= $question_id_stmt->fetch(PDO::FETCH_ASSOC);
  
  $correct_choice_stmt = $dbh->query("SELECT name FROM choices WHERE valid=1 AND prefecture_id = $id");
  $correct_choice_result= $correct_choice_stmt->fetchAll(PDO::FETCH_ASSOC);
  
  for ($i=1; $i< count($correct_choice_result)+1; $i++) {

    $configuration_stmt = $dbh->query("SELECT * FROM configurations WHERE prefecture_id = $id AND question_id = $i");
    $configuration_result = $configuration_stmt->fetch(PDO::FETCH_ASSOC);


    echo
      '<div>
        <div>' . $i .'.この地名はなんて読む？</div>
        <img src=../img/' . $configuration_result["img"] . ' alt="画像">
      </div>';

      $choices_stmt = $dbh->query("SELECT * FROM choices WHERE prefecture_id = $id AND question_id = $i");
      $choices_result = $choices_stmt->fetchAll(PDO::FETCH_ASSOC);

      $valid_choices_stmt = $dbh->query("SELECT * FROM choices WHERE prefecture_id = $id AND question_id = $i AND valid = 1");
      $valid_choices_result = $valid_choices_stmt->fetch(PDO::FETCH_ASSOC);

      foreach ($choices_result as $selection) {
        echo '<li>' . $selection["name"] . '</li>'; 
      }
    echo
      '
      <div>
        <p>正解！</p>
        <p>正解は ' . $valid_choices_result['name'] . '
        です</p>
      </div>';

    echo
      '
      <div>
        <p>不正解！</p>
        <p>正解は ' . $valid_choices_result['name'] . '
        です</p>
      </div>';
    } 
  ?>

</body>
</html>
