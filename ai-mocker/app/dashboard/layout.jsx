"use client";
import React from "react";
import Header from "./_components/Header";
import logo from "../../public/logo.svg";
import { createContext, useState } from "react";
import Footer from "./_components/Footer";
export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  return (
    <div>
        <Header logo={logo} />
        <div className="mx-5 md:mx-20 lg:mx-36">
          <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
            {children}
          </WebCamContext.Provider>
        </div>
        <Footer/>
    </div>
  );
};

export default DashboardLayout;