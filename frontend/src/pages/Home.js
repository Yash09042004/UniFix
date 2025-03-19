import React from 'react';
import './Home.css'; 

export default function Home() {
  return (
    <div className="container">
      {/* Glass-effect Navbar */}
      <nav
        style={{
          position: 'absolute',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '15px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '0.5rem 1rem',
          zIndex: 2,
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '1rem',
          }}
        >
          <li><a href="#/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/domains" style={{ color: '#fff', textDecoration: 'none' }}>Domain</a></li>
          <li><a href="/feedback" style={{ color: '#fff', textDecoration: 'none' }}>Feedback</a></li>
          <li><a href="#contribute" style={{ color: '#fff', textDecoration: 'none' }}>Contribute</a></li>
        </ul>
      </nav>

      {/* Animated blobs */}
      <div className="blobs">
        <div className="blob a">a</div>
        <div className="blob b">b</div>
        <div className="blob c">c</div>
      </div>

      {/* Glass morphism card (centered on top of blobs) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '800px',
          minHeight: '400px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '15px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>
          Welcome to UniFix!
        </h1>
      </div>
    </div>
  );
}