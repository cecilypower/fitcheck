'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 600, margin: '50px auto', textAlign: 'center' }}>
      <h1>FabrikLens</h1>
      <p>Paste a fashion product link below:</p>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.zara.com/..."
        style={{
          width: '100%',
          padding: '12px',
          marginTop: '20px',
          fontSize: '16px',
        }}
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Analyzing…' : 'Analyze'}
      </button>

      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          Error: {error}
        </div>
      )}

      {result && !error && (
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <h2>API Result:</h2>
          <pre
            style={{
              background: '#f4f4f4',
              padding: '10px',
              borderRadius: '4px',
              fontSize: '14px',
              overflowX: 'auto',
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}


