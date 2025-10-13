import { useEffect, useLayoutEffect, useRef, useState } from "react";

function EffectComparison() {
  const listRef = useRef();

  useEffect(() => {
    // Scroll to bottom AFTER paint → slight flicker
    listRef.current.scrollTop = listRef.current.scrollHeight;
  });

  return (
    <div style={{ border: "2px solid tomato", padding: "8px", margin: "8px" }}>
      <h3>useEffect (flickers)</h3>
      <div
        ref={listRef}
        style={{
          height: "120px",
          overflowY: "auto",
          background: "#fff5f5",
          padding: "4px",
        }}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>Message {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

function ScrollWithUseLayoutEffect() {
  const listRef = useRef();

  useLayoutEffect(() => {
    // Scroll to bottom BEFORE paint → no flicker
    listRef.current.scrollTop = listRef.current.scrollHeight;
  });

  return (
    <div
      style={{ border: "2px solid seagreen", padding: "8px", margin: "8px" }}
    >
      <h3>useLayoutEffect (smooth)</h3>
      <div
        ref={listRef}
        style={{
          height: "120px",
          overflowY: "auto",
          background: "#f3fff5",
          padding: "4px",
        }}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>Message {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

export default function ScrollDemo() {

  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      <h2>Scroll Behavior Comparison</h2>
        <p>Refresh repeatedly to see the slight flicker using standard <strong>useEffect</strong></p>

      <div style={{ display: "flex", gap: "16px" }}>
        <EffectComparison />
        <ScrollWithUseLayoutEffect />
      </div>
    </div>
  );
}
