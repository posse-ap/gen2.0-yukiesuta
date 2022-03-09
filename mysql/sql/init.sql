
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


-- 正解テーブル
DROP TABLE IF EXISTS `study_time`;
CREATE TABLE study_time (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
study_date INT NOT NULL,
study_hour INT NOT NULL 
);
INSERT INTO study_time (study_date,study_hour) VALUES
(20220305,4),
(20220306,5),
(20220307,6)