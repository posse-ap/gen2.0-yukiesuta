DROP TABLE IF EXISTS questions;

-- ここからテーブルをかく記述

-- big_questionsテーブル
DROP TABLE IF EXISTS `big_questions`;
CREATE TABLE big_questions (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(225) NOT NULL
);
-- idは自動で書いてる
INSERT INTO big_questions (name) VALUES
('東京'),
('広島');

-- 別のテーブルも作れる テーブルは一つにまとめる、全体スケジュール参照

-- 選択肢テーブル
DROP TABLE IF EXISTS `choices`;
CREATE TABLE choices (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prefecture_id INT NOT NULL,
question_id  INT NOT NULL,
name VARCHAR(225) NOT NULL,
valid INT NOT NULL
);
INSERT INTO choices (prefecture_id,question_id,name,valid) VALUES
(1,1,'たかなわ',1),
(1,1,'たかわ',0),
(1,1,'こうわ',0),
(1,2,'かめいど',1),
(1,2,'かめど',0),
(1,2,'かめと',0),
(2,2,'むかいなだ',1),
(2,2,'むこうひら',0),
(2,2,'むきひら',0);

-- 正解テーブル
DROP TABLE IF EXISTS `valids`;
CREATE TABLE valids (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prefecture_id INT NOT NULL,
valid_kanji VARCHAR(225) NOT NULL
);
INSERT INTO choices (prefecture_id,prefecture_id) VALUES
(1,'高輪'),
(1,'亀戸'),
(2,'向洋')


-- これなんのテーブル？？？？
DROP TABLE IF EXISTS `questions`;
CREATE TABLE questions (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
big_question_id  INT NOT NULL,
image VARCHAR(225) NOT NULL
);
INSERT INTO questions (big_question_id,image) VALUES
(1,'takanawa.png'),
(1,'kameido.png'),
(2,'mukainada.png');


-- -- 広島
-- CREATE TABLE hiroshima_choices (
-- hiroshima_choice_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- choice1 VARCHAR(225) NOT NULL,
-- choice2 VARCHAR(225) NOT NULL,
-- choice3 VARCHAR(225) NOT NULL
-- );
-- INSERT INTO choices (hiroshima_choice1,hiroshima_choice2,hiroshima_choice3) VALUES
-- ('いばらいち','せいげんち','いのはらし'),
-- ('かるが','いがるけ','かりどめや');
