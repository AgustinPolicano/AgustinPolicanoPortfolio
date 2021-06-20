import React, { useState, useEffect } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/components/Header";
import Body from "./Body/components/index";
import LoadingScreen from "./Header/components/LoadingScreen/LoadingScreen";
import Footer from "./Footer/Footer";
document.body.style = "background: #eeeeee;";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
      <Header/>
      <Body/>
    </div>
      ) : (
        <LoadingScreen />
      )}
       <Footer/>
      </>
    
  );
}

export default App;
