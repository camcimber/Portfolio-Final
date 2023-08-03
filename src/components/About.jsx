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
            Hi! My name is Camryn and I am currently a computer science major with a minor in digital arts and sciences at the University of Florida. I am a problem solver who appreciates the challenges of tech and wishes to contribute in growing my field of software engineering. I am the kind of a person who has to succeed because I am afraid to fail. As someone who has experienced the effects of substance abuse and addiction in my household, I have felt a pressure to make the the right choices - to be a positive reflection of my family. I believe that only through carefully analyzing the outcomes of our choices can we make better decisions and find the most effective solutions. To honor those I’ve lost and to support those I love, I am dedicated to improving both myself and my community - to be an example of success.             </p>

            <br />

            <p className="text-xl">
            As I honed in on achieving success, I found the field of technology and became passionate about the endless opportunities and learning curves that come with the career. I began studying Java before integrating C++ and Python into my technical skills. With continued practice, I realized that I like to challenge myself with complex problems and tackling issues head-on. As well as, working in teams and discussing multiple approaches to solving one problem. I am furthering my education and doing so, I like to consider myself a lifelong learner. I have become open-minded and adaptable to all of the moving parts that occur in tech and to what may come my way. Software Engineering and working with the full stack are two aspects I am trying to immerse myself within. I enjoy working with all layers of the stack and creating user-friendly, efficient websites.             </p>

            <br />
            <p className="text-xl">
            I look forward to experiences and make an impact on a company that aligns with my principles of passion for learning, inclusivity, and growth.
            </p>

        </div>
    </div>
  );
};

export default About;