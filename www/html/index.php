<?php
include dirname(__FILE__) . '/dbconnect.php';
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kuizy</title>
    <link rel="stylesheet" href="/css/reset.css"/>
    <link rel="stylesheet" href="/css/quizy.css"/>
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
  
  for ($question_count=1; $question_count< count($correct_choice_result)+1; $question_count++) {

    $configuration_stmt = $dbh->query("SELECT * FROM configurations WHERE prefecture_id = $id AND question_id = $question_count");
    $configuration_result = $configuration_stmt->fetch(PDO::FETCH_ASSOC);


    echo
      '<div>
        <div class="question_stmt"><span>' . $question_count .'.この地名はなんて読む？</span></div>
        <img class="question_img" src=../img/' . $configuration_result["img"] . ' alt="画像">
      </div>';
      
      echo '<ul id="selections' . $configuration_result["question_id"] . '">';

      $choices_stmt = $dbh->query("SELECT * FROM choices WHERE prefecture_id = $id AND question_id = $question_count");
      $choices_result = $choices_stmt->fetchAll(PDO::FETCH_ASSOC);

      $valid_choices_stmt = $dbh->query("SELECT * FROM choices WHERE prefecture_id = $id AND question_id = $question_count AND valid = 1");
      $valid_choices_result = $valid_choices_stmt->fetch(PDO::FETCH_ASSOC);

      shuffle($choices_result);
      
      foreach ($choices_result as $selection) {
        echo '
          <li class="choice pointer" onclick="check(' . $selection["question_id"] . ',' . $selection["valid"] . ')">' . $selection["name"] . ' </li>';
        }
        
      echo '</ul>';
        
      echo
      '
      <div class="valid_stmt my_hidden answer_box" id="valid_stmt' . $selection["question_id"] . '1">
        <p><span>正解！</span></p>
        <p>正解は ' . $valid_choices_result['name'] . '
        です</p>
      </div>';

    echo
      '
      <div class="invalid_stmt my_hidden answer_box" id="invalid_stmt' . $selection["question_id"] . '0">
        <p><span>不正解！</span></p>
        <p>正解は ' . $valid_choices_result['name'] . '
        です</p>
      </div>';
    } 
  ?>
<script src="/js/quizy.js"></script>
</body>
</html>
