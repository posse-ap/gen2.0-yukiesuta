DROP TABLE IF EXISTS questions;

-- ここからテーブルをかく記述
CREATE TABLE questions (
big_question_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
question_title VARCHAR(225) NOT NULL
);
INSERT INTO questions (question_title) VALUES
('東京の難読地名クイズ'),
('広島の難読地名クイズ');

-- 別のテーブルも作れる
CREATE TABLE choices (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
choice1 VARCHAR(225) NOT NULL,
choice2 VARCHAR(225) NOT NULL,
choice3 VARCHAR(225) NOT NULL
);
INSERT INTO choices (choice1,choice2,choice3) VALUES
('たかなわ','たかわ','こうわ'),
('かめいど','かめど','かめと');