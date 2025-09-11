import React, { useState } from 'react';

import './KristofferProfile.css';

const sections = [
  {
    title: 'Background',
    content: `Kristoffer began his career as a field operative after completing a comprehensive training program that included instructional videos and knowledge checks. This foundation ensured he understood the essential concepts and best practices for success in the field.`
  },
  {
    title: 'Role & Expertise',
    content: `Kristoffer enjoys working with data and developing strategies to solve complex problems. At RDSolutions, he provides data integration services for businesses of all sizes and offers forecasting solutions to help clients remain competitive in the market.`
  },
  {
    title: 'What to Know',
    content: `He wants others to understand the importance of data integration and forecasting in helping businesses stay relevant.`
  },
  {
    title: 'Alternate Career Path',
    content: `With a recent degree in Software Engineering, Kristoffer would likely be working as a Software Engineer, Full-Stack Developer, UX/UI Designer, or Data Analyst if not in his current role.`
  },
  {
    title: 'Personal Interests',
    content: `Grocery staples: bathroom and kitchen supplies, refrigerated items.\nFavorite brands: Wild Catch, Kirkland, Tyson.\nHobbies: Watching mystery movies with his wife and kids, exploring nature, hiking new trails, and adventuring with his Husky, Big Boy. He values time outdoors for reflection and brainstorming new ideas.`
  },
  {
    title: 'Favorites',
    content: `Food: Pancit Malabon\nSports team: Dallas Mavericks (“Go Mavs!”)`
  },
  {
    title: 'Family',
    content: `Spouse: Margarita\nChildren: Glen & Alleine`
  }
];


function ProfileSection({ section, isOpen, onClick }) {
  return (
    <div className="profile-section">
      <button
        className="section-title"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {section.title}
      </button>
      {isOpen && (
        <div className="section-content">
          {section.content.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function KristofferProfile() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="profile-bg">
      <div className="profile-container">
        <img src="/KrisK.JPEG" alt="Kristoffer Kelly" className="profile-photo" />
        <h1>Kristoffer Kelly</h1>
        <p className="profile-meta">Location: Las Vegas | Years with RDSolutions: 9 months</p>
        <div className="profile-sections">
          {sections.map((section, idx) => (
            <ProfileSection
              key={section.title}
              section={section}
              isOpen={openSection === idx}
              onClick={() => setOpenSection(openSection === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
