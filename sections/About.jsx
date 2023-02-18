"use client";

const About = () => (
  <section className="flex justify-center">
    <button
      onClick={() => {
        throw Error("My error in about section");
      }}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Click for Error
    </button>
  </section>
);

export default About;
