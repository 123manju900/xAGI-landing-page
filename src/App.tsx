import React from 'react';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { ScholasticAchievements } from './components/ScholasticAchievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#D4B7A1]">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto space-y-24">
          <Skills />
          <WorkExperience />
          <ScholasticAchievements />
          <Education />
        </div>
      </main>

      <Contact />
    </div>
  );
}

export default App;