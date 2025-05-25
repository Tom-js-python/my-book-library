# 📚 My Book Library

A personalized book cataloging app for managing physical and digital book collections — quickly, intelligently, and flexibly.

This is a work-in-progress project designed for readers who want a simple, elegant way to log books, and track reading status. My Book Library helps users easily catalog their personal library across physical and digital formats. Designed for efficiency and customization, the app enables rapid entry of minimal information (title, author, year) and automatically completes the rest via a book API lookup (e.g., Google Books API). It supports organizing by user-defined physical locations (like “Living Room – Shelf 2”) or digital categories (e.g., “Kindle – Non-Fiction”).

---

## 🚀 Project Goals

**My Book Library** helps users catalog their personal library across both physical and digital formats. Designed for speed and customization, the app allows minimal data entry (title, author, year) and auto-fills the rest via a smart book lookup (e.g., Google Books API). It supports organizing by custom locations (like "Living Room – Shelf 2") or digital categories (like "Kindle – Non-Fiction"). It will also allow them to:

- Sort and filter by author, genre, and status (read/reading/to-read).
- Store personal notes, reviews, and quotes.
- Clean and customizable UI using Sass.
- Private by default — no account required.

---

## ✨ Features

- 🔍 **Smart Book Lookup**  
  Enter partial information (title, author, year), receive matching suggestions via Google Books API, and auto-fill the form.

- 🏷️ **Track Format & Location**

  - Support for both **physical** and **digital** books
  - Custom location hierarchy: e.g., `Dining Room → Bookcase 1 → Shelf 3`
  - Track special cases: "Lent to **_", "Borrowed from _**"

- 📚 **Book Metadata Fields**

  - Title, Author, Publication Year
  - Genre/Category
  - ISBN
  - Dewey Decimal Code (if available)
  - Notes
  - **Reading Status**: Not Started / Reading / Finished
  - Online Ratings (e.g., Goodreads or Google)

- ⚡ **Fast Entry Workflow**  
  Once a book is saved, the form resets for quick entry of the next book.

- 🔐 **User Accounts (Planned)**  
  Users can create accounts and access their collection across devices.

- 🔄 **Sorting & Filtering (Planned)**  
  Filter and sort books by:
  - Reading Status
  - Format (Physical/Digital)
  - Genre
  - Location
  - Rating

---

## 🔐 Privacy

Book data is not highly sensitive, but privacy still matters. A future privacy policy will clarify:

- What data is collected (books, locations, user accounts)
- Where it’s stored (PostgreSQL backend or locally)
- How users can delete/export their data

---

## 🛠️ Tech Stack (Planned)

- **Frontend**: React, SCSS (Sass), React Router
- **Backend**: Python, FastAPI, PostgreSQL
- **API Integration**: Google Books API
- **Deployment**: Docker, Vite, Railway/Render (TBD)

---

## 📦 Project Status

🧪 **In Development**

- [x] Project Initialized
- [x] Frontend Scaffold
- [ ] Book Entry Form
- [ ] Google Books API Integration
- [ ] Custom Location System
- [ ] Local Book Storage
- [ ] Reading Status Tagging
- [ ] Sorting & Filtering UI
- [ ] User Authentication (Backend)
- [ ] PostgreSQL Integration

---

## 👤 Author

- **Tom Brown**

---

## 📄 License

This project is open source under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). You are free to use, modify, and distribute it under the terms of the license.

---
