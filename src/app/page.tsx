"use client"
import React, { useState, useCallback, useEffect } from "react";
import { BasicButton, OptimizedButton } from "@/app/components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBasicClick = () => {
    console.log("Basic Button Clicked. Re-rendering will occur due to function change.");
  };

  const handleOptimizedClick = useCallback(() => {
    console.log("Optimized Button Clicked. Function is stable.");
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">

      <h1 className="text-3xl font-bold mb-8 text-text-muted">
        Parent Render Count: <span className="text-[#1877F2]">{count}</span>
      </h1>

      <div className="flex gap-8 w-full max-w-2xl">
        <div className="flex-1 border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Basic Component (Slow)</h2>
          <BasicButton label="Basic Button" onClick={handleBasicClick} />
          <p className="mt-4 text-sm text-center">
            **Problem:** On every Parent render, this button also re-renders unnecessarily.
          </p>
        </div>

        <div className="flex-1 border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Optimized Component (Fast)</h2>
          <OptimizedButton label="Optimized Button" onClick={handleOptimizedClick} />
          <p className="mt-4 text-sm text-center">
            **Solution:** `React.memo` and `useCallback` keep it stable.
          </p>
        </div>
      </div>
    </div>
  );
}
