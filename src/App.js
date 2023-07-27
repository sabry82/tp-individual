import React from 'react';
import HomePage from './components/HomePage';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <HomePage></HomePage>
    </>
  );
}

export default App;
