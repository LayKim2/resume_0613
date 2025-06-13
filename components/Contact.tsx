import React from 'react';

interface ContactItem {
  icon: string;
  title: string;
  content: string;
}

const Contact: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: '📧',
      title: 'Email',
      content: 'kim.developer@email.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+82 10-1234-5678'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: 'linkedin.com/in/kimdeveloper'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      content: 'github.com/kimdeveloper'
    }
  ];

  return (
    <section id="contact" className="contact fade-in">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        새로운 기회나 협업 제안을 언제나 환영합니다!
      </p>
      
      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact; 