DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
big_question_id INT NOT NULL,
question_title VARCHAR(225) NOT NULL
);
INSERT INTO questions (big_question_id, question_title) VALUES
(1, '東京の難読地名クイズ'),
(2, '広島の難読地名クイズ');