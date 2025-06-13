import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'AI 크리에이터 커뮤니티',
      description: 'www.airang.co.kr - AI 크리에이터들이 모여 소통하고 협업하는 커뮤니티 플랫폼입니다.',
      image: 'airang',
      technologies: ['React'],
      demoLink: 'https://www.airang.co.kr',
      githubLink: 'https://github.com/LayKim2/airang_05292025'
    },
    {
      title: '유저 맞춤 장소 추천 서비스',
      description: 'www.hashkorea.co.kr - 사용자 취향 기반의 장소 추천 및 리뷰 서비스입니다.',
      image: 'hashkorea',
      technologies: ['React'],
      demoLink: 'https://www.hashkorea.co.kr',
      githubLink: 'https://github.com/LayKim2/hashkorea_05222025'
    },
    {
      title: '부동산 서비스',
      description: 'www.zipple.co.kr - 부동산 매물 검색, 매칭, 문의가 가능한 서비스입니다. Frontend는 React, Backend는 .NET Core로 개발하였습니다.',
      image: 'zipple',
      technologies: ['React', '.NET Core'],
      demoLink: 'https://www.zipple.co.kr',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects fade-in">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{
              width: '100%',
              height: '140px',
              marginBottom: '1rem',
              background: '#fff',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {project.image === 'airang' && (
                <svg width="90%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="320" height="120" rx="18" fill="url(#airang-gradient)"/>
                  <defs>
                    <linearGradient id="airang-gradient" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7B5FFF"/>
                      <stop offset="1" stopColor="#5F8CFF"/>
                    </linearGradient>
                  </defs>
                  <text x="30" y="60" fontSize="48" fontWeight="bold" fill="#fff">AIrang</text>
                  <text x="30" y="95" fontSize="22" fill="#fff" opacity="0.9">AI Creator Community</text>
                </svg>
              )}
              {project.image === 'hashkorea' && (
                <svg width="90%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="hashkorea-gradient" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6A3D"/>
                      <stop offset="1" stopColor="#FFB86C"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="120" rx="18" fill="url(#hashkorea-gradient)"/>
                  <g>
                    <rect x="30" y="35" width="50" height="50" rx="12" fill="#fff"/>
                    <text x="55" y="70" fontSize="32" fontWeight="bold" fill="#FF6A3D" textAnchor="middle">#</text>
                  </g>
                  <text x="95" y="65" fontSize="32" fontWeight="bold" fill="#222">Hash Korea</text>
                  <text x="95" y="95" fontSize="18" fill="#444" opacity="0.8">Find Your Personalized Place</text>
                </svg>
              )}
              {project.image === 'zipple' && (
                <svg width="90%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="320" height="120" rx="18" fill="#EAF2FF"/>
                  <g>
                    <circle cx="55" cy="60" r="28" fill="#5F8CFF"/>
                    <rect x="40" y="50" width="30" height="16" rx="4" fill="#fff"/>
                    <circle cx="55" cy="60" r="10" fill="#fff"/>
                  </g>
                  <text x="95" y="65" fontSize="36" fontWeight="bold" fill="#5F8CFF">ZIPPLE</text>
                </svg>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <Link href={project.demoLink} className="project-link">
                Live Demo
              </Link>
              <Link href={project.githubLink} className="project-link">
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 