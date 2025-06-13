import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-element">⚡</div>
      <div className="floating-element">🚀</div>
      <div className="floating-element">💻</div>
      <div className="floating-element">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.08"/></svg>
      </div>
      <div className="hero-content responsive-hero-content">
        <img src="/profile.jpg" alt="Profile" className="hero-profile-img" />
        <div className="hero-text-block">
          <h1 className="hero-title">김영인</h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="description">
            비즈니스 가치를 높이는 웹 개발자입니다.<br />
            사용자 경험과 성능, 그리고 최근에는 AI 기반 Full Stack 실전 경험까지 갖추고 있습니다.
          </p>
          <div className="cta-buttons">
            <Link href="#projects" className="btn btn-primary glow">프로젝트 보기</Link>
            <Link href="#contact" className="btn btn-secondary glow">연락하기</Link>
          </div>
        </div>
      </div>
      <div style={{position: 'absolute', left: '50%', bottom: '32px', transform: 'translateX(-50%)', zIndex: 10}}>
        <span style={{fontSize: '2.5rem', color: 'rgba(255,255,255,0.7)', animation: 'bounceDown 1.5s infinite'}}>↓</span>
      </div>
    </section>
  );
};

export default Hero; 