"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import LoginPage from "./pages/login";
// import PasswordPage from "./pages/password";
// import Dashboard from "./pages/dashboard";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const destination = token ? "/dashboard" : "/login";
    router.push(destination);
  }, [router, token]);

  return null;
}
