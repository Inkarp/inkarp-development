import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Sarvanan from '/src/assets/Team/Saravanan.jpeg';
import Madhu from '/src/assets/Team/Madhusudhan.jpeg';
import MsReddy from '/src/assets/Team/MsReddy.jpg';
import Sreedar from '/src/assets/Team/Sreedar.jpeg';
const directors = [
  {
    name: 'K. Sreedhar',
    title: 'Director (South & East)',
    email: 'sreedhar@inkarp.com',
    location: 'Bangalore',
    img: Sreedar,
    message:
      `Over the years I have seen how trust shapes lasting partnerships. My effort has always been to listen carefully, guide customers toward the right solutions, and support teams in doing the same. Experience has taught me that consistency and commitment are what truly sustain growth for both people and the company.`,
    links: ['https://www.linkedin.com/in/koora-sreedhar-06934019/'],
  },
  {
    name: 'M. Madhusudhan',
    title: 'Director (North)',
    email: 'madhusudhan@inkarp.com',
    location: 'Delhi',
    img: Madhu,
    message:
      `My approach has always been rooted in science. Understanding the details, whether in chromatography or instrumentation, helps me guide customers toward solutions that genuinely work. Sales, to me, is not persuasion but problem solving. Every interaction is about applying knowledge with sincerity so researchers can move forward with confidence.`,
    links: ['https://www.linkedin.com/in/madhusudhan-mohan-04219329/'],
  },
  {
    name: 'M. S. Reddy',
    title: 'Director (West)',
    email: 'msreddy@inkarp.com',
    location: 'Ahmedabad',
    img: MsReddy,
    message:
      `I have always believed that the real value of sales lies in enabling progress for our customers. By introducing solutions that simplify research and strengthen outcomes, my focus has been to build trust step by step. Innovation matters, but what matters more is delivering it with honesty and consistency.`,
    links: ['https://www.linkedin.com/in/m-srinivasa-reddy-8874731/'],
  },
  {
    name: 'N. Saravanan',
    title: 'Chief Operating Officer (All India)',
    email: 'saravanan@inkarp.com',
    location: 'Chennai',
    img: Sarvanan,
    message:
      `Service is where promises meet reality. My focus has always been on making sure every instrument we deliver continues to perform and every customer feels supported long after a sale is made. Reliability in service is not optional, it is the foundation on which lasting relationships are built.`,
    links: ['https://www.linkedin.com/in/saravanan-natarajan-027a2744/'],
  },
];

function DirectorCard({ director }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#E63946] shadow-sm hover:shadow-md transition-all duration-300">
      {/* image */}
      <div className="p-3">
        <div className="relative w-full max-w-xs mx-auto rounded-3xl overflow-hidden  aspect-[4/4]  ">
          <img
            src={director.img}
            alt={director.name}
            className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-[1.02] "
            loading="lazy"
          />
        </div>
      </div>

      {/* text */}
      <div className="px-4 pb-4 text-center">
        <h3 className="mt-1 text-xl font-[MaxOT] text-[#E63946]">{director.name}</h3>
        <p className="mt-1 text-base font-[MaxOT] text-gray-400">{director.title}</p>

        {/* <div className="mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5F5F5] border border-gray-200 text-xs font-[Roboto] text-black/70">
            {director.location}
          </span>
        </div> */}

        <p className="mt-3 text-sm font-[Roboto] text-black text-left whitespace-pre-line">
          {director.message}
        </p>

        {director.links?.[0] && (
          <a
            href={director.links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-blue-600 hover:text-blue-800 shadow-sm hover:shadow transition"
            aria-label={`${director.name} on LinkedIn`}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TeamNewTwo() {
  return (
    <section className="relative  py-10 md:px-10 lg:px-10">
      {/* subtle stage background (on-brand) */}
    
      {/* themed heading */}
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase  bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Our Directors
        </span>
     
      </div>

      {/* grid */}
      <Fade direction="up" triggerOnce delay={200}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {directors.map((d) => (
            <DirectorCard key={d.name} director={d} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
