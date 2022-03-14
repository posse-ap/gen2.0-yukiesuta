DROP TABLE IF EXISTS study_languages;
CREATE TABLE study_languages (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
study_language VARCHAR(225) NOT NULL,
color VARCHAR(225) NOT NULL 
);

INSERT INTO study_languages (study_language, color) VALUES
('JavaScript','red'),
('CSS','yellow'),
('PHP','blue'),
('HTML', 'green'),
('Lalavel','blown'),
('SQL','white'),
('SHELL','black'),
('情報システム基礎知識（その他)','purple');


DROP TABLE IF EXISTS study_contents;
CREATE TABLE study_contents (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
study_content VARCHAR(225) NOT NULL ,
color VARCHAR(225) NOT NULL
);
INSERT INTO study_contents (study_content,color) VALUES
('ドットインストール','blue'),
('N予備校','red'),
('POSSE課題','yellow');


DROP TABLE IF EXISTS study_data;
CREATE TABLE study_data (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
study_date datetime NOT NULL,
study_hour INT NOT NULL ,
study_language_id INT NOT NULL ,
study_content_id INT NOT NULL 
);
INSERT INTO study_data (study_date,study_hour,study_language_id,study_content_id) VALUES
('2021-03-11',2,3,3),
('2021-03-11',3,3,3),
('2022-03-11',2,3,3),
('2022-03-11',4,3,3),
('2021-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',5,3,3),
('2021-03-11',2,3,3),
('2022-03-11',26,3,3),
('2022-03-06',7,1,2),
('2022-03-07',8,3,3)