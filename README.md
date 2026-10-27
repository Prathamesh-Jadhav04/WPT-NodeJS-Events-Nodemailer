# Node.js Events & Email Notifications

A Node.js learning project demonstrating event-driven programming using the built-in `EventEmitter` module and email delivery using `Nodemailer` with Gmail SMTP.

## 📌 Project Overview

This project demonstrates how custom events can trigger different operations in a Node.js application. It includes a simulated database insertion event, an email notification function, and a separate event for handling email recipient information.

## ✨ Features

- **EventEmitter:** Create and handle custom events.
- **InsertData Event:** Simulate inserting a product record into a database.
- **Email Notifications:** Send emails using Nodemailer and Gmail SMTP.
- **SendEmail Event:** Handle and display email recipient information.
- **Async/Await:** Manage asynchronous email operations.
- **Error Handling:** Handle email delivery errors using `try...catch`.

## 🛠️ Technologies Used

- Node.js
- JavaScript
- Node.js `events` module
- Nodemailer
- Gmail SMTP
- Async/Await and Promises

## 📂 Project Structure

```text
NodeJS-Events-Nodemailer/
│
├── index.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

- Node.js and npm installed.
- A Gmail account.
- A Gmail App Password configured for your account.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/NodeJS-Events-Nodemailer.git
cd NodeJS-Events-Nodemailer
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install dependencies

```bash
npm install nodemailer dotenv
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
RECIPIENT_EMAIL=recipient@gmail.com
```

Use your own credentials locally. Never upload your `.env` file or expose your Gmail App Password publicly.

### 4. Update the email configuration

Load environment variables at the beginning of `index.js`:

```javascript
require("dotenv").config();
```

Use the environment variables in your Nodemailer configuration instead of hardcoding credentials:

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
```

Set the recipient using:

```javascript
to: process.env.RECIPIENT_EMAIL
```

### 5. Add a `.gitignore` file

```gitignore
node_modules/
.env
```

### 6. Run the project

```bash
node index.js
```

The application will trigger the configured events, display the simulated product record, process the email recipient event, and attempt to send an email.

## 🧠 Concepts Learned

- Event-driven programming in Node.js.
- Creating event listeners with `EventEmitter.on()`.
- Triggering events with `EventEmitter.emit()`.
- Passing objects as event data.
- Using asynchronous functions and `await`.
- Sending emails through an SMTP service.
- Managing configuration securely with environment variables.

## 🔮 Future Improvements

- Integrate a real database such as MongoDB or MySQL.
- Add email validation and reusable notification services.
- Implement logging and retry mechanisms for failed email delivery.
- Add unit tests and configuration validation.
- Introduce a REST API to trigger events from an application.

## 👨‍💻 Author

**Prathamesh Jadhav**

GitHub: [@Prathamesh-Jadhav04](https://github.com/Prathamesh-Jadhav04)

## 📄 License

This project is intended for educational purposes. Add an open-source license if you want to define reuse and distribution permissions.