DROP TABLE IF EXISTS questions;

-- ここからテーブルをかく記述
CREATE TABLE questions (
big_question_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
question_title VARCHAR(225) NOT NULL
);
INSERT INTO questions (question_title) VALUES
('東京'),
('広島');

-- 別のテーブルも作れる テーブルは一つにまとめる、全体スケジュール参照
CREATE TABLE choices (
choices_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
choice1 VARCHAR(225) NOT NULL,
choice2 VARCHAR(225) NOT NULL,
choice3 VARCHAR(225) NOT NULL
);
INSERT INTO choices (choice1,choice2,choice3) VALUES
('たかなわ','たかわ','こうわ'),
('かめいど','かめど','かめと');


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
