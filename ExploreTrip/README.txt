# ExploreTrip – Travel Booking Web Application


## Features

### Core Features

* Browse **popular destinations**
* View **featured travel packages**
* Search and filter **available flights**
* Submit inquiries through a **Contact form**

---

### Internationalization

* Supports multiple languages (English, Français, Español)
* Language selection dropdown in the navbar
* Uses Google Translate integration
* UI adapts to different text lengths across languages

---

###  UI / UX Enhancements

* Styled using **Bootstrap**
* Responsive layout (mobile + desktop)
* Clean and modern card-based design
* Improved forms and navigation

---

###  Usability Heuristics (Nielsen)

The app was designed following usability principles such as:

* Visibility of system status (success messages, feedback)
* Consistency and standards (uniform layout & navigation)
* User control and freedom (back buttons, navigation options)
* Error prevention (form validation)
* Recognition over recall (clear labels and UI elements)

---

###  Database Integration

* MySQL database used to store user data
* Contact form submissions are saved in the database
* Backend API built with Node.js + Express

---

##  Technologies Used

### Frontend

* React (Vite)
* Bootstrap
* CSS

### Backend

* Node.js
* Express
* MySQL

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone 'https://github.com/N3TTI3/SEG3125---Lab-8.git'
cd ExploreTrip
```

---

### 2. Frontend Setup

```bash
npm install
npm run dev
```

---

### 3. Backend Setup

```bash
cd server
npm install
node server.js
```

 Make sure the backend runs on:

```text
http://localhost:5001
```

---

### 4. MySQL Setup

Create database:

```sql
CREATE DATABASE exploretrip;
USE exploretrip;
```

Create table:

```sql
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    subject VARCHAR(200),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Testing the Database Feature

1. Open the app
2. Go to **Contact page**
3. Fill out the form and submit
4. In MySQL Workbench run:

```sql
SELECT * FROM contact_messages;
```

You should see the submitted message stored in the database.



## 👨‍💻 Authors

* Jessy Helaleh
* Kate Boyd