CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age VARCHAR(2) NOT NULL,
  situation ENUM('guest', 'fiance') DEFAULT 'guest'
);

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  isDefault BOOLEAN DEFAULT false,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  images JSON,
  price DOUBLE(10,2) NOT NULL,
  isProrate BOOLEAN DEFAULT false,
  isAvailable BOOLEAN DEFAULT true,
  happinessStatus ENUM('groom happy', 'bride happy', 'both happy') DEFAULT 'both happy',
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(id),
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE file (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fileName VARCHAR(255) NOT NULL UNIQUE,
  contentLength INT NOT NULL,
  contentType VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DOUBLE(10,2) NOT NULL,
  isProrate BOOLEAN DEFAULT false,
  isAvailable BOOLEAN DEFAULT true,
  categoryId INT,
    userId INT,
  FOREIGN KEY (categoryId) REFERENCES marryme.categories(id),
  FOREIGN KEY (userId) REFERENCES marryme.users(id)
);

CREATE TABLE files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fileName VARCHAR(255) NOT NULL UNIQUE,
  contentLength INT NOT NULL,
  contentType VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  userId INT,
  FOREIGN KEY (userId) REFERENCES marryme.users(id)
);