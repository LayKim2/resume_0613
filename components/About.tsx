import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'Django', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="about fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/300x300/667eea/white?text=Profile"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h3>안녕하세요! 저는 김개발입니다.</h3>
          <p>
            5년차 풀스택 개발자로서 React, Node.js, Python을 주력으로 다양한 웹 애플리케이션을 개발해왔습니다.
            사용자 중심의 직관적인 인터페이스 설계와 확장 가능한 백엔드 아키텍처 구축에 전문성을 가지고 있습니다.
          </p>
          <p>
            새로운 기술 습득에 적극적이며, 팀과의 협업을 통해 더 나은 제품을 만들어가는 것을 즐깁니다.
            클린 코드와 테스트 주도 개발을 실천하며, 지속 가능한 소프트웨어 개발에 관심이 많습니다.
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 