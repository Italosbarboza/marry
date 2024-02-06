CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age VARCHAR(2) NOT NULL,
  situation ENUM('guest', 'fiance') DEFAULT 'guest'
);