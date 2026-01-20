# 🚀 Sleep Pact Setup Guide

## 1. Get Your "Keys" (2 Minutes)
This connects your app to Google Login and the Database.

1.  Open [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add project"** -> Name it `sleep-pact` -> Continue -> Continue -> **Create Project**.
3.  Once created, click the **Web Icon (`</>`)** (it's white, in the middle).
    -   App nickname: `sleep-pact`.
    -   Click **Register app**.
4.  You will see a code block. copy the `const firebaseConfig = { ... }` part.
    -   **Important**: You only need the values inside the quotes!
5.  Open the `.env.example` file in your code folder.
6.  Paste your values next to the matching names:
    ```env
    VITE_FIREBASE_API_KEY=AIzaSy...
    VITE_FIREBASE_AUTH_DOMAIN=sleep-pact...
    ...
    ```
7.  **Rename** the file from `.env.example` to `.env`.

## 2. Enable Login & Database (1 Minute)
1.  In Firebase Console, go to **Build** (left menu) -> **Authentication**.
    -   Click **Get Started**.
    -   Click **Google** -> **Enable** -> Select your support email -> **Save**.
2.  Go to **Build** -> **Firestore Database**.
    -   Click **Create Database**.
    -   Choose location (default is fine).
    -   Select **Start in test mode** -> **Create**.

## 3. Upload to GitHub
I have already prepared the code for you locally.

1.  Go to [GitHub.com](https://github.com/new) and create a new **Repository**.
    -   Repository name: `sleep-pact` (or whatever you like).
    -   Make it **Public** (or Private, but Public is free for Pages).
    -   **Important**: Do NOT check "Add a README", "Add .gitignore", or "Choose a license". Keep it empty!
    -   Click **Create repository**.

2.  Copy the commands shown under **"…or push an existing repository from the command line"**.
    -   It will look like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/sleep-pact.git
        git branch -M main
        git push -u origin main
        ```
    -   Paste those commands into your terminal here and hit Enter.

## 4. Automatic Deployment
Once you push, wait about 1-2 minutes.
1.  Go to your Repository on GitHub.
2.  Click **Settings** (top bar) -> **Pages** (left menu).
3.  You should see a message: "Your site is live at..."
4.  Click that link to use your app!

