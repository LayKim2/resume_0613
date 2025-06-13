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
      title: '온라인 쇼핑몰 플랫폼',
      description: 'React와 Node.js를 활용한 현대적인 전자상거래 플랫폼입니다. 실시간 재고 관리, 결제 시스템, 관리자 대시보드 등 완전한 기능을 제공합니다.',
      image: 'E-Commerce Platform',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: '팀 프로젝트 관리 도구',
      description: '실시간 협업이 가능한 프로젝트 관리 도구입니다. 칸반 보드, 타임라인 뷰, 팀 채팅 기능을 통합한 올인원 솔루션입니다.',
      image: 'Task Management',
      technologies: ['Vue.js', 'Python', 'Django', 'WebSocket', 'Redis'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI 데이터 분석 대시보드',
      description: '머신러닝 모델의 결과를 시각화하는 인터랙티브 대시보드입니다. 실시간 데이터 처리와 예측 결과를 직관적으로 표현합니다.',
      image: 'AI Dashboard',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'TensorFlow'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects fade-in">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">{project.image}</div>
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