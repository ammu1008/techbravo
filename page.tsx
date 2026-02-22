"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMsg(data.message || "Not logged in"))
      .catch(() => setMsg("Error"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>EDU Platform</h1>
      <p>{msg}</p>
    </main>
  );
}