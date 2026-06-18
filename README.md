# 🔥 Real-Time Chat Application

A modern, fast, and feature-rich real-time chat application built using **React (Vite)** and **Firebase**. It supports instant messaging, image sharing, user search, profile updates, and active status tracking.

---

## 🚀 Key Features

*   **Real-Time Messaging:** Instant message delivery and receipt utilizing Firestore's real-time listeners (`onSnapshot`).
*   **User Authentication:** Complete authentication system including Email/Password sign-up, sign-in, log-out, and secure password reset links.
*   **Media Sharing:** Upload and share images inside chats directly.
*   **User Search:** Find and add users by their exact unique usernames to initiate conversations.
*   **Active Status Tracker:** Real-time indicator displaying if a user is currently online.
*   **Profile Management:** Update profile details, bio, and change profile pictures.

---

## 🛠️ Tech Stack

*   **Frontend Library:** React (v18.3.1)
*   **Build Tool & Dev Server:** Vite (v5.4.0)
*   **Routing:** React Router DOM (v6.26.0)
*   **Global State Management:** React Context API
*   **Notifications:** React Toastify (v10.0.5)
*   **Backend & Database:** Firebase (v10.12.5)
    *   **Firebase Authentication** (User sessions & auth state)
    *   **Cloud Firestore** (NoSQL Database for users, chats, & messages)
    *   **Firebase Storage** (Hosting user avatars and chat images)

---

## ⚙️ Firebase Setup & Configuration

Follow these steps to configure your Firebase backend:

### 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Register a new **Web App** in the project dashboard and copy the `firebaseConfig` object.

### 2. Enable Firebase Authentication
1. Go to **Authentication** in the Firebase console.
2. In the **Sign-in method** tab, enable **Email/Password**.

### 3. Create a Cloud Firestore Database
1. Go to **Firestore Database** and create a database.
2. In the **Rules** tab, set the rules to allow authenticated reads/writes:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

### 4. Enable Firebase Storage
1. Go to **Storage** in the Firebase console and click **Get Started**.
2. In the **Rules** tab, set the rules to allow authenticated reads/writes:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd chat-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Firebase Config
Open `src/config/firebase.js` and paste your Firebase Web App configuration:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

### 4. Start Development Server
```bash
npm run dev
```
Open the local URL (usually `http://localhost:5173`) in your web browser.
