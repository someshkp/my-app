"use client";
import Button from "@/app/component/button";
import Logo from "/public/Logo.png";
import EyeOff from "/public/icons/eye-off.png";
import Footer from "@/app/component/footer";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { customerLogin, findCustomerById } from "../_api/login";

export default function PasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  let isFalse = false;
  const handleClick = async () => {
    console.log("click");
    try {
      const email = localStorage.getItem("email");
      console.log(email, password);
      if (!email || !password) return;

      const payload = {
        username: email,
        password: password,
      };
      console.log(payload);

      const response = await customerLogin(payload);
      console.log(response);

      if (response) {
        await findCustomerById(response.token)
          .then((res) => {
            const userData = res.filter((user) => user.id === response.user_id);
            localStorage.setItem("userName", userData?.[0].customer_name);
          })
          .catch((error) => console.log(error));
        localStorage.setItem("accessToken", response.token);
        localStorage.setItem("userId", response.user_id.toString());
        router.push("/dashboard");
        isFalse = false;
        localStorage.removeItem("email");
      } else {
        console.log("incorrect email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      isFalse = true;
      // Handle error, show error message, etc.
    } finally {
      // Regardless of success or failure, remove email from local storage
      // localStorage.removeItem("email");
    }
  };
  console.log(isFalse);
  return (
    <div>
      <div className="passwordSection">
        <div className="mainSection">
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
            <p className="line1">STEP 2</p>
            <p className="line2">Create an account to continue</p>
            <p className="line3">
              You’ll be able to log in to Dingoo with this email address and
              password.
            </p>
          </div>
          <div className="fieldsSection">
            <div>
              <h5>Enter a password to create your account with </h5>
              <div className="center">
                <div className="image">
                  <span className="ab">
                    <Image
                      className="icons"
                      src={EyeOff}
                      alt="eye-icon"
                      width={15}
                      height={15}
                    />
                  </span>
                  <input
                    className="passwordInputField"
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size={5}
                    name="text"
                    type="text"
                  />
                  {isFalse ? (
                    <span style={{ fontSize: 12, color: "red" }}>
                      Incorrect Email or password
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="button-text-container">
              <p style={{ fontSize: 13, textAlign: "center" }}>
                Use a minimum of 6 characters (case sensitive)
                <br />
                with at least one number or special character.
              </p>
              <Button
                className="button"
                title="Agree & Continue"
                onClick={handleClick}
                loading={true}
              />
            </div>
          </div>
        </div>
        <div className="secondSection">
          Dingoo will use your data to personalise and improve your Dingoo
          experience and to send you information about Dingoo. You can change
          your communication preferences anytime. We may use your data as
          described in our Privacy Policy, including sharing it with The Test of
          Companies. By clicking &quot;Agree & Continue &quot;, you agree to
          our Subscriber Agreement and acknowledge that you have read
          our Privacy Policy and Collection Statement
        </div>
      </div>

      <Footer />
    </div>
  );
}
