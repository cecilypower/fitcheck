'use client';

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    // For now, no backend — just echo the input
    setResult(`You entered: ${url}`);
  };

  return (
    <main style={{ maxWidth: 600, margin: "50px auto", textAlign: "center" }}>
      <h1>FabrikLens</h1>
      <p>Paste a fashion product link below:</p>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.zara.com/..."
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          fontSize: "16px"
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Analyze
      </button>

      {result && (
        <div style={{ marginTop: "30px", fontSize: "18px" }}>
          {result}
        </div>
      )}
    </main>
  );
}

