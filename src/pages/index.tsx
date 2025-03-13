import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MainPage from "../components/MainPage/MainPage";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;
