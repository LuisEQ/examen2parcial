import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from "./components/CartPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgFOYh92m-GIZCLAzXibIyP3REA8l7G-A",
  authDomain: "cart-react-project-b8031.firebaseapp.com",
  databaseURL: "https://cart-react-project-b8031-default-rtdb.firebaseio.com",
  projectId: "cart-react-project-b8031",
  storageBucket: "cart-react-project-b8031.appspot.com",
  messagingSenderId: "155560627648",
  appId: "1:155560627648:web:32c6322a164d888b874c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
