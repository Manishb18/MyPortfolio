import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
        I am currently pursuing my B.Tech at Kakatiya Instiute of Technology and Science, Warangal in the brach Computer Science and Engineering specialized with Artificial Intelligence and Machine learning. I hold a CGPA of 8.76.
        </p>

        <br />

        <p className="text-xl">
        I am Proficient in programming languages including Python, Java, and JavaScript. I have an Extensive experience in data science and full stack development projects. Skilled in building ML models and solving use cases, with a passion for designing websites to showcase results. Enjoys sports, particularly cricket and football.
        </p>
      </div>
    </div>
  );
};

export default About;