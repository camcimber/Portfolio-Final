import React from 'react'

export const About = () => {
  return (
    <div 
    name="about" 
    className="w-full h-screen bg-gradient-to-b from-green-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl py-6">
            Hi! My name is Camryn Cimber, and I am a student with a passion for technology. I enjoy solving complex problems and collaborating in teams to find the most optimal solutions. Being a lifelong learner, I am constantly exploring different fields and concepts in the tech world to discover my true passion.</p>

            <br />

            <p className="text-xl">
            My primary interests lie in software engineering, UI/UX design, and full-stack development. I find joy in working with all layers of the stack and creating user-friendly, efficient websites.            
            </p>

            <br />
            <p className="text-xl">
            My journey into tech began in high school when I took my first computer science course. Although I felt intimidated and lacked confidence in my skills, I persevered with the help of guidance and mentors. In college, I continued to explore different areas within technology, and my interest in creating web applications grew.
            </p>
            <br />
            <p className="text-xl">
            As I continue to gain experiences, I am actively seeking a company that shares my values of a passion for learning and providing a positive working environment. I am excited about the possibilities that lie ahead and look forward to contributing my skills and knowledge to make a difference in the tech industry.
            </p>
        </div>
    </div>
  );
};

export default About;