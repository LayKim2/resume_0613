import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-element">⚡</div>
      <div className="floating-element">🚀</div>
      <div className="floating-element">💻</div>
      
      <div className="hero-content">
        <h1>김개발</h1>
        <p className="subtitle">Full Stack Developer</p>
        <p className="description">
          혁신적인 웹 솔루션을 통해 비즈니스 가치를 창출하는 개발자입니다.<br />
          사용자 경험과 성능 최적화에 열정을 가지고 있습니다.
        </p>
        <div className="cta-buttons">
          <Link href="#projects" className="btn btn-primary">
            프로젝트 보기
          </Link>
          <Link href="#contact" className="btn btn-secondary">
            연락하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 