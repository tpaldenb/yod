# 🎉 Vibeathon MVP

This project is an interactive **event entry and participation system** built with **Node.js (Express) backend** and a **vanilla HTML/JS frontend**.

It simulates a real-world **gate entry system** where a user’s face is verified to allow entry. Once inside, the user can participate in different events, earn badges, navigate via directions, and interact with a simple chatbot.

---

## 🚀 Features

* **Face Verification Gate**

  * Uses a reference image (`sap.jpg`) and webcam feed to simulate face recognition.
  * Grants access only if the face matches.

* **Events Page**

  * Five events: Music Battle, Dance Show, Coding Challenge, Quiz Competition, Sports Arena.
  * Earn badges by participating in events.
  * Unlock a medal after completing all checkpoints.

* **Interactive Map / Directions**

  * Shows checkpoints for each event.
  * Users click through checkpoints to simulate navigation.

* **Chatbot**

  * Simple in-browser bot that answers queries about badges, events, and directions.

---

## 🗂️ Repository Structure

```
yod/
├── backend/              # Node.js backend
│   ├── index.js          # Express server
│   ├── package.json      # Backend dependencies
│   └── package-lock.json
│
├── frontend/             # Frontend files served by backend
│   ├── index.html        # Gate Entry (face scan)
│   ├── events.html       # Events page
│   ├── events_chat.html  # Alternate events+chatbot page
│   └── sap.jpg           # Reference image for verification
│
├── .vscode/
│   └── settings.json     # Local dev server config
│
└── README.md             # Project documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/tpaldenb/yod.git
cd yod/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm start
```

### 4. Access the App

Open your browser at:

```
http://localhost:3000
```

---

## 🌐 Deployment on Render

This project is **Render-ready**.

* Root directory: `backend`
* Build Command: `npm install`
* Start Command: `npm start`

Frontend files are served automatically from `/frontend`.

---

## 📌 Notes

* Current face verification is **pixel-based** and may not work reliably in real-life scenarios.
* For production-level face recognition, consider integrating [`face-api.js`](https://github.com/justadudewhohacks/face-api.js) or an ML backend.

---

## 👨‍💻 Authors

* Built by
  **Tenzin Palden** ([@tpaldenb](https://github.com/tpaldenb))
  **Aditya Agrawal ([@adityadevco](https://github.com/adityadevco))
  **Shasvat Ranjan ([@Shasvat123](https://github.com/Shasvat123))
* 
* Hackathon Project: **Vibeathon MVP**
