"use client";
import Button from "@/app/component/button";
import Logo from "/public/Logo.png";
import Footer from "@/app/component/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleClick = () => {
    console.log("Email:", email);
    localStorage.setItem("email", email);
    router.push("/password");
  };
  return (
    <div>
      <div className="loginSection">
        <div className="descriptionSection">
          <div className="logo-section">
            <Image
              className="icons"
              src={Logo}
              alt="logo"
              width={70}
              height={30}
            />
          </div>
          <p className="line1">STEP 1</p>
          <p className="line2">
            Enter your email <br /> address to continue
          </p>
          <p className="line3">
            Log in to your account. If you don’t have one, you will be prompted
            to create one.
          </p>
        </div>
        <div className="fieldsSection">
          <div>
            <input
              className="emailInputField"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="button-container">
            <Button
              className="button"
              title="Continue"
              onClick={handleClick}
              loading={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
