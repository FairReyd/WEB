const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: 'lylyk2006',
  port: 5432,
});

app.get('/books', async (req, res) => {
  try {
    console.log('GET /books - отримання списку всіх книг');
    const result = await pool.query('SELECT * FROM books ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ' + err);
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`GET /books/${id} - пошук книги за ID`);
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Книгу не знайдено');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ' + err);
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, published_year } = req.body;
    console.log('POST /books - додавання книги:', title);
    const result = await pool.query(
      'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
      [title, author, published_year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ' + err);
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, published_year } = req.body;
    console.log(`PUT /books/${id} - оновлення книги`);
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *',
      [title, author, published_year, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Книгу не знайдено');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ' + err);
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`DELETE /books/${id} - видалення книги`);
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Книгу не знайдено');
    }
    res.json({ message: 'Книгу видалено', book: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ' + err);
  }
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});