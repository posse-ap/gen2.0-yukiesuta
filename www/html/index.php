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


  $id = $_GET["id"];

  echo($id);//urlのidの値をecho
  
  $stmt = $dbh->query("SELECT * FROM big_questions WHERE id = $id" );
  // FETCH_ASSOCでカラム名をキーとする連想配列で返します。
  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  $stmtChoices = $dbh->query("SELECT name FROM choices WHERE prefecture_id = $id");
  $choices = $stmtChoices->fetchAll(PDO::FETCH_ASSOC);

  $stmtQuestion_id = $dbh->query("SELECT question_id FROM choices WHERE prefecture_id = $id");
  $question_id= $stmtQuestion_id->fetchAll(PDO::FETCH_ASSOC);

  $stmtCorrect_choice = $dbh->query("SELECT name FROM choices WHERE valid=1 AND prefecture_id = $id");
  $correct_choice= $stmtCorrect_choice->fetchAll(PDO::FETCH_ASSOC);

// $prefectures_value = "SELECT * FROM prefectures WHERE id = $id";
// $questions_value =  "SELECT * FROM questions INNER JOIN prefectures ON questions.prefecture_id = $id";
// $selections_value = "SELECT * FROM selections INNER JOIN questions ON selections.question_id = questions.id where prefecture_id = $id";

// $prefectures = $db->query($prefectures_value)->fetchAll(PDO::FETCH_ASSOC | PDO::FETCH_UNIQUE);
// $questions = $db->query($questions_value)->fetchAll(PDO::FETCH_ASSOC | PDO::FETCH_UNIQUE);
// $selections = $db->query($selections_value)->fetchAll(PDO::FETCH_ASSOC | PDO::FETCH_UNIQUE);


  // print_r($result);
  // print_r($choices);
  print_r($correct_choice); 

  // $dbh = null;

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
    <?php for ($i=0; $i< count($correct_choice); $i++) {
      echo
        '<div id="quiz" class="question">
          <div id="questionArea" class="question_area">' . $i .'.この地名はなんて読む？</div>
          <ul id="worksFigure" style="display: flex;flex-direction: column">
        </div>';

        // これじゃ全部の設問で選択肢が問１になる
          foreach ($choices as $selection) {
            echo '<li>' . $selection["name"] . '</li>'; 
        }
        echo
        '
        <div id="correctBox">
          <p class="text_seikai">正解！</p>
          <p>正解は ' . $correct_choice["name"] . '
          です</p>
        </div>';
        echo
        '
        <div id="correctBox">
          <p class="text_seikai">不正解！</p>
          <p>正解はです</p>
        </div>';
    } 
    // ？？？
    // <p>正解は ' . $correct_choice[$questions["order"]]["name"] . 'です</p>
    ?>
      
      
      <h3>ガチで
        <!-- <?= $result[htmlspecialchars($_GET["id"])] ;?>  -->
        <?= $result["name"] ;?> 

        の人しか解けない！ #

        

        <!-- <?= print_r($result[0]["name"]); ?> -->
        <?=$result["name"]?>
  </h3>

   <?php for ($questions["order"]=1; $questions["order"] < 3; $questions["order"]++) { 
    

}
?> 


        <!-- 邪魔だからコメントアウト -->
    <!-- <script type="text/javascript" src="/js/quizy.js"></script> -->
  </body>
</html>
