import styled from "styled-components";
import potter from "../assets/Potter1.jpeg";
import AboutPotter from "./AboutPotter";
import FooterPotter from "./FooterPotter";

const PotterPort = () => {
  return (
    <>
      <section className="bg-zinc-100 min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-10">
              <p className="text-xl text-green-600">
                College of Arts, Media and Technology, Chiang Mai University
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Welcome to Potter's Portfolio
              </h1>
              <p className="text-xl text-gray-700">
                Hi, I'm Potter. I'm a student at Chiang Mai University, majoring
                in Digital Industry Integration. I'm passionate about technology
                and design, always eager to learn and create.
              </p>
            </div>
            <div className="h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={potter}
                className="w-full h-full object-cover"
                alt="Potter"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 w-full py-16">
        <AboutPotter />
      </section>
      <section className="bg-slate-800 w-full py-16">
        <FooterPotter />
      </section>
    </>
  );
};

export default styled(PotterPort)``;
