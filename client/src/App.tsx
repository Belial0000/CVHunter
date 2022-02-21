import React, { useEffect } from "react";
import StepsForm from "./components/StepsForm";
import { Header } from "./components/Header";
import { Background } from "./components/Background";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import Login from "./components/login";
import Profile from "./components/Profile";
import Auth from "./components/Auth";
import './app.css'
import { Landing } from './components/Landing';
import PdfGenerator from "./components/PdfGenerator";
import CoveringLetter from "./components/CoveringLetter";
import { useAction } from "./hooks/useAction";
import nookies from 'nookies'
import axios from "axios";
import jwt from 'jwt-decode'



function App() {
  const { initUser, initToken } = useAction()

  useEffect(() => {
    const coc = nookies.get(null, 'authToken')
    if (coc.authToken) {
      initToken({ token: coc.authToken })
      const tempData: any = jwt(coc.authToken)
      initUser({ id: tempData.sub, email: tempData.email })

    }

  }, [])

  return (
    <BrowserRouter>
      <Background />
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cardList" element={<CardList />} />
          <Route path="/form" element={<StepsForm />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pdf" element={<PdfGenerator />} />
          <Route path="/letter" element={<CoveringLetter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
