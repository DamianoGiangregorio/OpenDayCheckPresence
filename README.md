# OpenDayCheckPresence

<div align="center">

<img src="logo.png" alt="OpenDayCheckPresence Logo" width="100" />

### Web application for Open Day attendance verification and management

Students can confirm their attendance using a verification code generated from their personal information and event date.  
Administrators can upload, manage, export, and monitor attendance records through a dedicated dashboard.

![HTML](https://img.shields.io/badge/HTML-20.1%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-36.7%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-31.0%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-12.2%25-777BB4?style=flat-square&logo=php&logoColor=white)

</div>

---

## 📖 Overview

OpenDayCheckPresence is a full-stack web application developed to simplify attendance management during school Open Day events.

The system is divided into two main areas:

- **Student Area** — public page where students confirm their attendance by entering their personal data and a verification code.
- **Administrator Area** — dashboard used to upload student lists, monitor attendance, delete records, and export data.

The application uses a frontend written in HTML, CSS, and JavaScript, while the backend is implemented in PHP with a MySQL database.

---

## ✨ Main Features

### 👨‍🎓 Student Features
- Attendance verification through a public form
- Verification code validation
- Real-time success/error feedback
- Automatic attendance registration

### 🛠️ Administrator Features
- Upload student lists from Excel files
- View attendance grouped by Open Day date
- Delete single students or all students for a specific date
- Export attendance tables to Excel
- Generate verification codes automatically

### ⚙️ Backend Features
- REST-style PHP API endpoints
- MySQL database integration
- Attendance state management
- Student CRUD operations

---

## 🧱 Project Architecture

The application follows a classic client-server architecture:

```text
Frontend (HTML/CSS/JavaScript)
        │
        ▼
PHP API Endpoints
        │
        ▼
MySQL Database
```

### Frontend
Handles user interaction, form validation, verification code calculation, and asynchronous communication with backend APIs using `fetch()`.

### Backend
Processes requests, performs database queries, updates attendance status, and returns JSON responses.

### Database
Stores student information, Open Day dates, and attendance status.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript (ES Modules) | Frontend logic and API communication |
| PHP | Backend APIs and database interaction |
| MySQL / MariaDB | Relational database |

---

## 📂 Project Structure

```text
OpenDayCheckPresence/
│
├── index.html                  # Public attendance verification page
├── indexScript.js              # Main frontend logic
├── CommonScript.js             # Shared utilities and code generation logic
├── IndexStyle.css              # Main stylesheet
├── logo.png                    # School/application logo
│
├── API/                        # Backend PHP APIs
│   ├── getStudente.php
│   ├── getStudenti.php
│   ├── insertStudente.php
│   ├── deleteStudente.php
│   ├── deleteStudenti.php
│   ├── SetPresenzaStudente.php
│   └── dbconf.txt              # Database configuration
│
├── AdminPage/                  # Administrator dashboard
│   ├── AdminInterface.html
│   ├── AdminScript.js
│   ├── AdminStyle.css
│   └── example.xlsx
│
├── DBCreationQuery/
│   └── studenti.sql            # Database creation script
│
└── README.md
```

---

## 🚀 Installation

### Requirements

- PHP 7.4 or higher
- MySQL or MariaDB
- Apache, XAMPP, Laragon, Nginx, or PHP built-in server

---

### 1. Clone the repository

```bash
git clone https://github.com/DamianoGiangregorio/OpenDayCheckPresence.git
cd OpenDayCheckPresence
```

---

### 2. Create the database

Import the SQL file located in `DBCreationQuery/studenti.sql`.

Example using MySQL:

```bash
mysql -u root -p opendaycheck < DBCreationQuery/studenti.sql
```

The SQL script creates the `studenti` table with the following fields:

| Field | Type |
|---|---|
| ID | int |
| nome | varchar(30) |
| cognome | varchar(30) |
| classe | varchar(30) |
| OpenDayDate | date |
| presenza | tinyint(1) |

---

### 3. Configure database credentials

Edit the file:

```text
API/dbconf.txt
```

The file must contain:

```text
servername
username
password
database_name
```

Example:

```text
localhost
root

opendaycheck
```

---

### 4. Start the application

Using PHP built-in server:

```bash
php -S localhost:8080
```

Open the application in your browser:

```text
http://localhost:8080
```

---

## 🖥️ Student Workflow

```text
1. Open index.html
2. Insert:
      - name
      - surname
      - class
      - verification code
3. Submit the form
4. Frontend requests student data from:
      API/getStudente.php
5. JavaScript generates a verification code locally
6. Entered code is compared with generated code
7. If valid:
      API/SetPresenzaStudente.php
      updates presenza = 1
8. User receives confirmation message
```

---

## 🛠️ Administrator Workflow

```text
1. Open AdminPage/AdminInterface.html
2. Upload Excel file containing student data
3. AdminScript.js reads the XLSX file
4. Students are inserted through:
      API/insertStudente.php
5. Attendance data is loaded using:
      API/getStudenti.php
6. Admin can:
      - delete a single student
      - delete all students for a date
      - export filtered data to Excel
```

---

## 🔑 Verification Code System

The verification code is generated client-side inside `CommonScript.js`.

The algorithm uses:

```text
name + surname + class + OpenDayDate
```

The resulting string is hashed using a custom DJB2-style hashing algorithm and converted into hexadecimal format.

This mechanism ensures that each student has a deterministic verification code associated with their event date.

---

## 📡 API Endpoints

### `getStudente.php`

Retrieves a student by:

- nome
- cognome
- classe
- data

Example:

```http
GET /API/getStudente.php?nome=mario&cognome=rossi&classe=5ai&data=2026/05/13
```

---

### `getStudenti.php`

Returns all students stored in the database.

---

### `insertStudente.php`

Inserts a new student into the database.

Parameters:

- nome
- cognome
- classe
- data

---

### `SetPresenzaStudente.php`

Updates the student's attendance status:

```sql
presenza = 1
```

---

### `deleteStudente.php`

Deletes a single student record.

---

### `deleteStudenti.php`

Deletes all students associated with a specific Open Day date.

---

## 🗄️ Database Structure

The application uses a single table called `studenti`.

### Table: `studenti`

| Column | Type | Description |
|---|---|---|
| ID | INT | Primary key |
| nome | VARCHAR(30) | Student name |
| cognome | VARCHAR(30) | Student surname |
| classe | VARCHAR(30) | Student class |
| OpenDayDate | DATE | Open Day date |
| presenza | TINYINT(1) | Attendance status |

---

## ⚠️ Important Notes

- Student names, surnames, and classes are normalized to lowercase before validation.
- The verification code comparison is case-insensitive.
- Attendance is registered only if the generated code matches the inserted one.
- API responses are returned in JSON format.
- The project currently uses raw SQL queries without prepared statements.

---

## 🔮 Possible Improvements

- Authentication system for administrators
- Prepared statements for improved security
- QR code attendance verification
- Better error handling
- Statistics dashboard
- CSV/Excel advanced export
- Responsive mobile optimization
- Deployment on cloud hosting

---

## 🎯 Educational Purpose

This project was developed for educational purposes to practice:

- Full-stack web development
- Client-server architecture
- REST-style APIs
- MySQL database management
- Excel file processing with JavaScript
- Frontend/backend integration

---

## 👨‍💻 Author

Damiano Giangregorio

GitHub:

https://github.com/DamianoGiangregorio

---

## 📄 License

This project is intended for educational and personal use.

---

<div align="center">

Made with ❤️ by Damiano Giangregorio

</div>
