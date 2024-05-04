"use client";
import Image from "next/image";
import Logo from "/public/Logo_white.png";
import Carousel from "@/app/component/carousel";
import Footer from "@/app/component/footer";
import { useEffect, useState } from "react";
import { findCustomerById } from "../_api/login";
import Button from "../component/button";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const userName = localStorage.getItem("userName");
  // console.log(user);
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
    };

    // Clear localStorage every 15 minutes
    const interval = setInterval(clearLocalStorage, 15 * 60 * 1000);

    // Clear localStorage when component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-logo-section">
          <Image
            className="icons"
            src={Logo}
            alt="logo"
            width={70}
            height={30}
          />
          <div>
            <Button
              className="button"
              title="Log out"
              onClick={handleClick}
              loading={true}
            />
          </div>
        </div>
        <div className="body-section">
          <p style={{ fontWeight: 500, fontSize: "40px" }}>
            Welcome {userName}
          </p>
          <h6>Hope you having a good day!</h6>
          <div className="sub-heading-section">
            <h2>Photography</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Carousel />
          </div>
          <div className="sub-heading-section">
            <h2>Learning</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Carousel />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
