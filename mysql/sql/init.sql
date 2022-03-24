DROP TABLE IF EXISTS study_languages;
CREATE TABLE study_languages (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
study_language VARCHAR(225) NOT NULL,
color VARCHAR(225) NOT NULL 
);

INSERT INTO study_languages (study_language, color) VALUES
('JavaScript','#338FC8'),
('CSS','#6CB753'),
('PHP','#EEB30D'),
('HTML','#EA563D'),
('Lalavel','#C66596'),
('SQL','#606060'),
('SHELL','#727171'),
('情報システム基礎知識（その他)','#90AF86');


DROP TABLE IF EXISTS study_contents;
CREATE TABLE study_contents (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
study_content VARCHAR(225) NOT NULL ,
color VARCHAR(225) NOT NULL
);
INSERT INTO study_contents (study_content,color) VALUES
('ドットインストール','#338FC8'),
('N予備校','#6CB753'),
('POSSE課題','#EEB30D');


DROP TABLE IF EXISTS study_data;
CREATE TABLE study_data (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
study_date datetime NOT NULL,
study_hour INT NOT NULL ,
study_language_id INT NOT NULL ,
study_content_id INT NOT NULL 
);
INSERT INTO study_data (study_date,study_hour,study_language_id,study_content_id) VALUES
('2022-03-01',2,5,1),
('2022-03-02',4,3,1),
('2022-03-03',6,2,1),
('2022-03-04',7,3,1),
('2022-03-05',8,7,2),
('2022-03-06',9,3,2),
('2022-03-07',2,1,1),
('2022-03-08',2,3,1),
('2022-03-09',2,1,1),
('2022-03-10',2,1,1),
('2022-03-11',7,6,2),
('2022-03-12',1,1,3),
('2022-03-13',2,1,1),
('2022-03-14',2,2,1),
('2022-03-15',2,6,1),
('2022-03-16',3,1,2),
('2022-03-17',4,3,1),
('2022-03-18',7,2,1),
('2022-03-19',7,7,1),
('2022-03-20',8,2,2),
('2022-03-21',9,2,3),
('2022-03-22',9,4,1),
('2022-03-23',0,3,3),
('2022-03-24',2,4,1),
('2022-03-25',2,1,3),
('2022-03-26',2,5,2),
('2022-03-27',2,6,2),
('2022-03-28',2,3,3),
('2022-03-29',2,7,2),
('2022-03-30',7,8,1),
('2022-03-31',33,4,3)
