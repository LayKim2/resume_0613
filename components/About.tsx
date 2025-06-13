import React from 'react';

const About: React.FC = () => {
  const skills = [
    'dotnet', 'azure', 'mssql'
  ];

  return (
    <section id="about" className="about fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="about-content responsive-about-content">
        <div className="about-profile-img-block">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h3>안녕하세요! 저는 김영인입니다.</h3>
          <p>
            5년차 풀스택 개발자로서 주로 닷넷(.NET) 기반의 웹 개발을 담당해왔습니다.<br />
            실무에서 Azure와 MSSQL을 활용한 다양한 프로젝트를 경험했습니다.
          </p>
          <p>
            새로운 기술 습득에 적극적이며, 최근에는 Blazor 등 최신 닷넷 웹 기술을 꾸준히 공부하고 있습니다.<br />
            변화하는 환경에 빠르게 적응하며, 더 나은 서비스를 만들기 위해 항상 노력합니다.
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