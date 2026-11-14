CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    published_year INTEGER
);

INSERT INTO books (title, author, published_year) VALUES
('Кобзар', 'Тарас Шевченко', 1840),
('Тіні забутих предків', 'Михайло Коцюбинський', 1911),
('1984', 'Джордж Орвелл', 1949);