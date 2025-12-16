# PLP Bookstore MongoDB Assignment

![MongoDB Logo](https://img.icons8.com/color/48/mongodb.png)

## 📋 Submission Overview
**Submission Date**: 2025-12-16  
**Database Version**: MongoDB Community Edition 6.0+  
**Autograding Status**: [Pending]  
**Instructor Review**: [Awaiting]

## 🚀 Quick Start Guide

### Prerequisites
- MongoDB Community Edition [installed](https://www.mongodb.com/docs/manual/installation/)
- Node.js v18+ (for script execution)
- MongoDB Compass (recommended for visualization)

### Setup Instructions
1. **Start MongoDB Service**:
   ```bash
   sudo systemctl start mongod  # Linux/Mac
   net start MongoDB            # Windows Admin
   ```

2. **Clone Repository**:

3. **Populate Database**:
   ```bash
   node insert_books.js
   ```

4. **Execute Queries**:
   ```bash
   mongosh "mongodb://localhost:27017" --file queries.js
   ```

## 📂 Repository Structure
```
.
├── insert_books.js     # Data population script (12 sample books)
├── queries.js          # Complete MongoDB operations (CRUD, Aggregation, Indexing)
├── README.md           # This documentation
└── assets/
    └── screenshot.png  # DB visualization proof (see example below)
```

## 🔍 Expected Outcomes
| Task | Verification Method | Expected Result |
|------|---------------------|-----------------|
| 1. Setup | `show dbs` in mongosh | `plp_bookstore` in database list |
| 2. CRUD | Query success messages | 10+ books in collection |
| 3. Advanced Queries | Output sorting/pagination | Filtered results in JSON format |
| 4. Aggregation | Console output | Calculated averages/author stats |
| 5. Indexing | `db.books.getIndexes()` | title_index and author_year_index present |

## 📸 Screenshot Example
![MongoDB Compass View](./assets/ss1%20(1).png)
![MongoDB Compass View](./assets/ss1%20(2).png)
*Sample view showing:*
- `books` collection with document preview
- Indexes tab displaying created indexes
- Collection stats showing 10+ documents
