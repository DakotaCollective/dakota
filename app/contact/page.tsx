"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent.");
  };

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-3xl mb-6">Contact</h1>

      <form onSubmit={handleSubmit} className="w-full sm:w-auto">
        <input
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-3 bg-black border"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="w-full p-3 bg-black border h-40"
        />

        <button className="bg-white text-black px-6 py-3">
          Send
        </button>
      </form>
    </div>
  );
}