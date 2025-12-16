// queries.js - MongoDB operations for PLP Bookstore Assignment

// ========== TASK 2: BASIC CRUD OPERATIONS ==========
// Find all books in specific genre
const findGenre = (genre) => db.books.find({ genre });

// Find books published after year
const findAfterYear = (year) => db.books.find({ published_year: { $gt: year } });

// Find books by author
const findAuthor = (author) => db.books.find({ author });

// Update book price
const updatePrice = (title, newPrice) => db.books.updateOne(
  { title },
  { $set: { price: newPrice } }
);

// Delete book by title
const deleteBook = (title) => db.books.deleteOne({ title });

// ========== TASK 3: ADVANCED QUERIES ==========
// In-stock & post-2010 books
const stockRecent = db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).projection({ title: 1, author: 1, price: 1, _id: 0 });

// Pagination (5 per page)
const paginate = (page) => db.books.find()
  .skip((page - 1) * 5)
  .limit(5);

// ========== TASK 4: AGGREGATION PIPELINES ==========
// Average price by genre
const avgPriceByGenre = db.books.aggregate([
  { $group: { 
      _id: "$genre", 
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
  }}
]);

// Top author by book count
const topAuthor = db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Books by publication decade
const decadeAnalysis = db.books.aggregate([
  { $project: {
      decade: { 
        $subtract: [
          "$published_year", 
          { $mod: ["$published_year", 10] }
        ] 
      }
  }},
  { $group: {
      _id: "$decade",
      count: { $sum: 1 }
  }},
  { $sort: { _id: 1 } }
]);

// ========== TASK 5: INDEXING ==========
// Create indexes
db.books.createIndex({ title: 1 }, { name: "title_index" });
db.books.createIndex(
  { author: 1, published_year: 1 },
  { name: "author_year_index" }
);

// Performance comparison
const explainQuery = db.books.find({ title: "1984" })
  .explain("executionStats");
