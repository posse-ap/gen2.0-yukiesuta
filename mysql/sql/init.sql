
-- -- big_questionsテーブル
-- DROP TABLE IF EXISTS `big_questions`;
-- CREATE TABLE big_questions (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
-- name VARCHAR(225) NOT NULL
-- );
-- -- idは自動で書いてる
-- INSERT INTO big_questions (name) VALUES
-- ('東京'),
-- ('広島');

-- -- 別のテーブルも作れる テーブルは一つにまとめる、全体スケジュール参照

-- -- 選択肢テーブル
-- DROP TABLE IF EXISTS `choices`;
-- CREATE TABLE choices (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- prefecture_id INT NOT NULL,
-- question_id  INT NOT NULL,
-- name VARCHAR(225) NOT NULL,
-- valid INT NOT NULL
-- );
-- INSERT INTO choices (prefecture_id,question_id,name,valid) VALUES
-- (1,1,'たかなわ',1),
-- (1,1,'たかわ',0),
-- (1,1,'tawa',0),
-- (1,1,'kawa',0),
-- (1,1,'たったたったた',0),
-- (1,1,'こうわわわあっわ',0),
-- (1,2,'かめいど',1),
-- (1,2,'かめど',0),
-- (1,2,'かめと',0),
-- (2,1,'むかいなだ',1),
-- (2,1,'むこうひら',0),
-- (2,1,'むきひら',0);

-- -- 正解テーブル
-- DROP TABLE IF EXISTS `configurations`;
-- CREATE TABLE configurations (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- prefecture_id INT NOT NULL,
-- question_id INT NOT NULL ,
-- valid_kanji VARCHAR(225) NOT NULL,-- ←使わない
-- img VARCHAR(225) NOT NULL
-- );
-- INSERT INTO configurations (prefecture_id,question_id,valid_kanji,img) VALUES
-- (1,1,'高輪','takanawa.png'),
-- (1,2,'亀戸','kameido.png'),
-- (2,1,'向洋','mukainada.png')

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
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-11',2,3,3),
('2022-03-06',7,1,2),
('2022-03-07',8,3,3)