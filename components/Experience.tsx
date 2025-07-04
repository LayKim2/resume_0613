import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      date: '2022.03 - Present',
      title: 'Senior Full Stack Developer',
      company: '테크 스타트업 ABC',
      description: [
        '메인 서비스의 프론트엔드 및 백엔드 개발 담당',
        'React와 Node.js를 활용한 SPA 개발 및 RESTful API 설계',
        'AWS 인프라 구축 및 CI/CD 파이프라인 구축',
        '코드 리뷰 및 주니어 개발자 멘토링'
      ]
    },
    {
      date: '2020.05 - 2022.02',
      title: 'Full Stack Developer',
      company: '소프트웨어 회사 XYZ',
      description: [
        'Python Django를 활용한 웹 애플리케이션 개발',
        '레거시 시스템 마이그레이션 및 성능 최적화',
        '데이터베이스 설계 및 쿼리 최적화',
        '애자일 방법론을 활용한 팀 개발 참여'
      ]
    },
    {
      date: '2019.03 - 2020.04',
      title: 'Junior Web Developer',
      company: '웹 에이전시 DEF',
      description: [
        '반응형 웹사이트 개발 및 유지보수',
        'HTML, CSS, JavaScript를 활용한 프론트엔드 개발',
        '고객사 요구사항 분석 및 기술적 해결방안 제시',
        '크로스 브라우저 호환성 확보'
      ]
    }
  ];

  return (
    <section id="experience" className="experience fade-in">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2021.01 ~</div>
          <h3 className="timeline-title">Calyx Software 재직 중</h3>
          <div className="timeline-company">Mortgage 관련 솔루션 개발</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2019.12 ~ 2020.08</div>
          <h3 className="timeline-title">スマートアイエンジー(SmartING) 개발부 사원</h3>
          <div className="timeline-company">입,출하 및 재고관리를 위한 물류관리 시스템 개발</div>
        </div>
      </div>
      <h2 className="section-title" style={{marginTop: '2rem'}}>Certificate</h2>
      <ul style={{marginLeft: '2rem', marginBottom: '2rem'}}>
        <li>2023.04 &nbsp; AZ-900</li>
        <li>2019.05 &nbsp; 정보처리기사</li>
        <li>2015. &nbsp; 워드 / 컴퓨터 활용능력</li>
      </ul>
      <h2 className="section-title">Overseas Experience</h2>
      <ul style={{marginLeft: '2rem'}}>
        <li>2019.12 ~ 2020.08 &nbsp; 일본 취업</li>
        <li>2017.09 ~ 2018.02 &nbsp; 중국 어학연수</li>
        <li>2024.04 ~ 2024.08 &nbsp; 영국 어학연수</li>
      </ul>
    </section>
  );
};

export default Experience; 