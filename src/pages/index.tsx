import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MainPage from "../components/MainPage/MainPage";
import styles from "@/styles/Home.module.css";
import React from "react";
import { GlobalStyles } from "@/styles/global";
import PaymentPage from "@/components/PaymentPage/PaymentPage";

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
      <GlobalStyles />
      <MainPage />
    </>
  );
};

export default Home;
