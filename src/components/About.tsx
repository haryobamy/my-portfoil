import React from 'react';

const About = () => {
  return (
    <section
      // @ts-ignore
      name='About Me'
      className='w-full h-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white  lg:pt-[400px] lg:pb-[750px]'
    >
      <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-5 lg:mt-20'>
          My name is Badmus Sulaimon Olawole, a self-taught developer, and today
          I'm thrilled to share the narrative of my unique journey into the
          expansive world of software development.Growing up, I wasn't
          surrounded by coding classes or formal education in computer science.
          Instead, my first encounter with programming was through online
          tutorials and the vast resources the internet had to offer. It was a
          realm of endless possibilities, waiting to be explored Fuelled by
          curiosity, I embarked on a solo expedition into the coding landscape.
          Online forums, blogs, and interactive coding platforms became my
          virtual mentors. I started with the basics, experimenting with HTML,
          CSS, and dipping my toes into the magical world of scripting
          languages.Self-learning comes with its own set of challenges.
          Frustrating bugs, moments of confusion, and the occasional imposter
          syndrome were part of the journey. Yet, with each challenge, there
          came a triumph – a successfully deployed project, a solved algorithm,
          and a growing sense of confidence.
          <br />
        </p>

        <p className='text-xl'>
          The discovery of open source projects and developer communities was a
          game-changer. Collaborating with other enthusiasts, contributing to
          projects, and receiving feedback opened new doors of learning. The
          sense of community was both motivating and empowering. With a solid
          understanding of vanilla JavaScript, I set sail into the world of
          frameworks and libraries. React, Angular, and Vue.js became my
          companions, expanding my toolkit and introducing me to the joys of
          building scalable and interactive applications.
        </p>

        <br />

        <p className='text-xl'>
          Projects became my playground for application and discovery. From
          simple games to dynamic websites, each project was a canvas to
          implement and reinforce the concepts learned. It was not just about
          coding; it was about solving problems and crafting solutions.
        </p>
        <br />

        <p className='text-xl'>
          Crafting a portfolio became my canvas to showcase the evolving skills.
          Personal projects, challenges, and the occasional hackathon entry
          found a home in my portfolio. It was a testament to the progress made
          and a compass guiding me toward new horizons. Armed with a unique
          skill set cultivated through self-guided learning, I ventured into the
          job market. It was a journey of resilience, networking, and proving
          that self-taught developers bring a wealth of creativity and
          adaptability to the industry.
        </p>

        <br />

        <p className='text-xl'>
          As I stand here today, a self-taught developer, I recognize that the
          learning journey never truly ends. The tech landscape evolves, and I
          embrace the constant pursuit of knowledge, eager to tackle new
          challenges and contribute to the ever-growing tapestry of code.
        </p>
      </div>
    </section>
  );
};

export default About;
