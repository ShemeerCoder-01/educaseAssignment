educaseassignment - A Simple React Authentication App
MyApp is a basic React application that demonstrates user authentication. It consists of four main pages: Landing, Sign Up, Login, and Settings. Users can sign up, log in, view their profile information.

Landing Page: The landing page welcomes users and provides options to either log in or sign up.

Sign Up Page: Users can register with their name, number, email, password, and company name. After successful registration, they are redirected to the login page.

Login Page: Users can log in using their registered email and password. Upon successful login, they are redirected to the Settings page.

Settings Page: Users can view their username and email address in the Settings page. A "Log Out" button in the navigation bar allows users to log out.

Firebase Authentication: Firebase is used for secure user authentication. Passwords are securely stored and managed by Firebase.

Getting Started
To run this application locally, follow these steps:

Clone the repository to your local machine:
git clone https://github.com/ShemeerCoder-01/educaseAssignment.git

Navigate to the project directory:
cd educaseassignment

Install project dependencies:
npm install

Configure Firebase:

Create a Firebase project on the Firebase Console.
Set up Firebase Authentication with email/password.
Obtain your Firebase project's configuration (Firebase SDK snippet) and add it to your project.

Start the development server:
npm start
Open your web browser and access the app at http://localhost:3000.

Usage
Landing Page:
Access the landing page to see a welcome message.
Click the "Log In" button to log in if you already have an account.
Click the "Sign Up" button to register a new account.

Sign Up Page:
Fill in your name, email, password, and company name to register.
After successful registration, you will be redirected to the login page.

Login Page:
Enter your registered email and password to log in.
Upon successful login, you will be redirected to the Settings page.

Settings Page:
View your username and email address.
Click the "Log Out" button in the navigation bar to log out.

Dependencies
React - A JavaScript library for building user interfaces.
Firebase - A cloud-based platform for building web and mobile apps, including authentication.
mui - material ui used for icons.
react-router-dom - used for internal routing.
