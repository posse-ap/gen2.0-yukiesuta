
<?php
    $study_datum = $dbh->query("SELECT * FROM study_data")->fetchAll(PDO::FETCH_ASSOC);
    $today_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data WHERE DATE_FORMAT(study_date, '%Y%m%d') = DATE_FORMAT(now(), '%Y%m%d')")->fetch(PDO::FETCH_ASSOC);

    $month_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data WHERE DATE_FORMAT(study_date, '%Y%m') = DATE_FORMAT(now(), '%Y%m')")->fetch(PDO::FETCH_ASSOC);
    $total_study_time_result = $dbh->query("SELECT SUM(study_hour) FROM study_data")->fetch(PDO::FETCH_ASSOC);

    $study_datum = $dbh->query("SELECT * FROM study_data")->fetchAll(PDO::FETCH_ASSOC);
    $study_datum_array = json_encode($study_datum);

    $study_contents_result = $dbh->query("SELECT * FROM study_contents")->fetchAll(PDO::FETCH_ASSOC);
    $study_contents_result_array = json_encode($study_contents_result);

    $study_languages_result = $dbh->query("SELECT * FROM study_languages")->fetchAll(PDO::FETCH_ASSOC);
    $study_languages_result_array = json_encode($study_languages_result);


    if(!($today_study_time_result ['SUM(study_hour)'])){
        $today_study_time_result ['SUM(study_hour)'] = 0 ;
    };

    $study_hour_datum = [];
    for ($i=1; $i < 9; $i++){ 
        $study_datum1 = $dbh->query("SELECT sum(study_hour) FROM study_data WHERE study_language_id = $i")->fetch(PDO::FETCH_ASSOC);
        if(!($study_datum1['sum(study_hour)'])){
            $study_datum1['sum(study_hour)']=0;
        };
        array_push($study_hour_datum,$study_datum1['sum(study_hour)']);
    }
    $study_hour_datum_array = json_encode($study_hour_datum);

    $study_contents_datum = [];
    for ($i=1; $i < 4; $i++){ 
        $study_datum1 = $dbh->query("SELECT sum(study_hour) FROM study_data WHERE study_content_id = $i")->fetch(PDO::FETCH_ASSOC);
        if(!($study_datum1['sum(study_hour)'])){
            $study_datum1['sum(study_hour)']=0;
        };
        array_push($study_contents_datum,$study_datum1['sum(study_hour)']);
    }
    $study_contents_datum_array = json_encode($study_contents_datum);