"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [message, setMessage] = useState("Welcome to TruPal!");

  useEffect(() => {
    const timer = setTimeout(() => setMessage("Track your finances smartly."), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">{message}</h1>
      <p className="text-lg mb-6">Your money management made simple.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setFeatures);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map(f => (
          <div key={f.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
