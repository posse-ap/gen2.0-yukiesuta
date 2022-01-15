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
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo 'データベースにアクセスしました！' ;
// エラー（例外）が発生した時の処理を記述
} catch (PDOException $e) {
  // エラーメッセージを表示させる
  echo 'データベースにアクセスできません！' . $e->getMessage();
  // 強制終了
  exit;
}


  // $choices_value =  "SELECT * FROM choices";
  // $choices = $dbh->query($choices_value)->fetch();

  // var_dump($choices);

  // $sql = 'SELECT * FROM big_questions';
  // $Titles = $dbh->prepare($sql);
  // // $stmt->bindValue(':name', '花子');
  // $Titles->execute();
  // echo $Titles;



// 東京or広島
  // prepare:ただ文章（変数込みのsql文を用意する ：の後に後で代入する
  // $Titles = $dbh->prepare('SELECT * FROM big_questions WHERE name = ?');
  // // execute()が代入を実行（データベースから分取ってくる）する、引数に配列を入れる
  // // $Titles->execute(array($Titles));
  // $Titles = $Titles->execute();
  // // fetchは1行目だけを取ってくる（配列１こ）、fetchAllは全部取ってくる（二次元配列）
  // $Title = $Titles->fetch();

  // var_dump($Title);



  $stmt = $dbh->query('SELECT * FROM big_questions');

  // FETCH_ASSOCでカラム名をキーとする連想配列で返します。
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  var_dump($result);

  $dbh = null;

  // // foreach文で配列の中身を一行ずつ出力
  // foreach ($result as $result_value) {
    
  //   // データベースのフィールド名で出力
  //   echo $result_value;
  // }


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
      <?php 
    } 
    ?>
      
      
      <h3>ガチで
        の人しか解けない！ #

        

        <?= print_r($result); ?>
        break
        <?= print_r($result[1]["id"]); ?>
        break
        <?= $result[0]["id"]; ?>
        </h3>
    <script type="text/javascript" src="/js/quizy.js"></script>
  </body>
</html>
