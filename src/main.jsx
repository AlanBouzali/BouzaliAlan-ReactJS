import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRlvfRKmRW3-e2J8xfJSoQ7BUu6a4R40k',
  authDomain: 'ecommercealanding.firebaseapp.com',
  projectId: 'ecommercealanding',
  storageBucket: 'ecommercealanding.appspot.com',
  messagingSenderId: '195070543015',
  appId: '1:195070543015:web:9e6c60c94a0845fb6b8782',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
