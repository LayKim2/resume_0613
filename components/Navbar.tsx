import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { id: 'home', label: 'Home', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 10.5L12 4l9 6.5" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10.5V19a1 1 0 001 1h3.5a1 1 0 001-1v-3.5a1 1 0 011-1h1a1 1 0 011 1V19a1 1 0 001 1H18a1 1 0 001-1v-8.5" stroke="#667eea" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { id: 'about', label: 'About', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#667eea" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#667eea" strokeWidth="2"/></svg>
  ) },
  { id: 'projects', label: 'Projects', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#667eea" strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke="#667eea" strokeWidth="2"/></svg>
  ) },
  { id: 'experience', label: 'Experience', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#667eea" strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke="#667eea" strokeWidth="2"/></svg>
  ) },
  { id: 'contact', label: 'Contact', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v4.5" stroke="#667eea" strokeWidth="2"/><path d="M3 10.5l9 6 9-6" stroke="#667eea" strokeWidth="2"/></svg>
  ) },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{boxShadow: '0 2px 20px rgba(102,126,234,0.08)', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.92)', position: 'fixed', top: 0, width: '100%', zIndex: 1000}}>
      <div className="nav-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto'}}>
        <div className="logo" style={{display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: '1.5rem', background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{marginRight: 8}}><circle cx="16" cy="16" r="16" fill="#667eea"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          김영인의 Portfolio
        </div>
        <div className="nav-toggle" style={{display: 'none', cursor: 'pointer'}} onClick={() => setOpen(true)}>
          <svg width="32" height="32" viewBox="0 0 32 32"><rect y="7" width="32" height="3" rx="1.5" fill="#667eea"/><rect y="15" width="32" height="3" rx="1.5" fill="#667eea"/><rect y="23" width="32" height="3" rx="1.5" fill="#667eea"/></svg>
        </div>
        {/* Overlay for mobile menu */}
        {open && <div className="nav-overlay" onClick={() => setOpen(false)}></div>}
        <aside className={`nav-drawer${open ? ' show' : ''}`}>
          <div className="drawer-header">
            <div className="drawer-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#667eea"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Portfolio</span>
            </div>
            <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3f4fa"/><path d="M10 10l12 12M22 10l-12 12" stroke="#667eea" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <ul className="drawer-links">
            {navItems.map(item => (
              <li key={item.id} className="drawer-link-item">
                <Link href={`#${item.id}`} className="drawer-link" onClick={() => setOpen(false)}>
                  <span className="drawer-link-icon">{item.icon}</span>
                  <span className="drawer-link-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id} style={{position: 'relative'}}>
              <Link href={`#${item.id}`} className="nav-link" style={{textDecoration: 'none', color: '#333', fontWeight: 500, padding: '0.5rem 0', transition: 'color 0.3s'}}>
                {item.label}
                <span className="nav-underline" style={{display: 'block', height: 3, borderRadius: 2, background: 'linear-gradient(45deg, #667eea, #764ba2)', width: 0, transition: 'width 0.3s'}}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .nav-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(30,32,50,0.32);
          z-index: 1000;
          animation: fadeInOverlay 0.3s;
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-drawer {
          position: fixed;
          top: 0; left: -100vw;
          width: 82vw;
          max-width: 340px;
          height: 100vh;
          background: #fff;
          border-top-right-radius: 24px;
          border-bottom-right-radius: 24px;
          box-shadow: 8px 0 32px rgba(102,126,234,0.14);
          z-index: 1101;
          display: flex;
          flex-direction: column;
          transition: left 0.38s cubic-bezier(.22,1,.36,1);
          overflow-y: auto;
          padding: 0;
        }
        .nav-drawer.show {
          left: 0;
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.5rem 0.5rem 1.5rem;
          border-bottom: 1px solid #f3f4fa;
        }
        .drawer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.2rem;
          color: #667eea;
        }
        .drawer-close {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .drawer-links {
          list-style: none;
          margin: 0;
          padding: 1.2rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .drawer-link-item {
          width: 100%;
        }
        .drawer-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.1rem 1.5rem;
          font-size: 1.08rem;
          font-weight: 600;
          color: #222;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.18s, color 0.18s;
        }
        .drawer-link:hover, .drawer-link:active {
          background: linear-gradient(90deg, #eaf0ff 0%, #f7f7fd 100%);
          color: #667eea;
        }
        .drawer-link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          flex-shrink: 0;
        }
        .drawer-link-label {
          flex: 1;
          text-align: left;
          white-space: nowrap;
          min-width: 0;
          margin-left: 0;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .nav-toggle {
            display: block;
            position: absolute;
            right: 1.2rem;
            top: 1.1rem;
            z-index: 1200;
            width: 44px;
            height: 44px;
          }
          .logo {
            font-size: 1.25rem !important;
            min-width: 0;
            padding-left: 0.5rem;
          }
        }
        @media (min-width: 769px) {
          .nav-overlay, .nav-drawer { display: none; }
          .nav-toggle {
            display: none !important;
          }
          .nav-links {
            display: flex !important;
            position: static;
            background: none;
            box-shadow: none;
            padding: 0;
            font-size: 1rem;
            font-weight: 500;
            gap: 2rem;
            height: auto;
            left: 0;
            transition: none;
            border-radius: 0;
            overflow: visible;
          }
          .logo {
            font-size: 1.5rem !important;
          }
        }
        .nav-link:hover .nav-underline {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 