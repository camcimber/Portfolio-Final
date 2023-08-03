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
            My name is Camryn and I am currently a computer science major with a minor in digital arts and sciences at the University of Florida. I am a problem solver who appreciates the challenges of tech and wishes to contribute in growing my field of software engineering. I am the kind of a person who has to succeed because I am afraid to fail. As someone who has experienced the effects of substance abuse and addiction in my household, I have felt a pressure to make the the right choices - to be a positive reflection of my family. I believe that only through carefully analyzing the outcomes of our choices can we make better decisions and find the most effective solutions. To honor those I’ve lost and to support those I love, I am dedicated to improving both myself and my community - to be an example of success.             </p>

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