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
    echo 'データベースにアクセスしました！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！' ;
      // エラー（例外）が発生した時の処理を記述
  } catch (PDOException $e) {
      // エラーメッセージを表示させる
    echo 'データベースにアクセスできません！' . $e->getMessage();
      // 強制終了
    exit;
  }