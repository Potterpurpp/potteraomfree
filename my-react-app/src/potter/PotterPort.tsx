import styled from "styled-components";
import potter from "../assets/Potter1.jpeg";
import AboutPotter from "./AboutPotter";

const PotterPort = () => {
  return (
    <>
      <section className="bg-zinc-200 w-full h-screen flex flex-col justify-between pt-16">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <p className="text-lg">
              College of Arts, Media and Technology, Chiang Mai University
            </p>
            <h1 className="text-4xl font-bold py-4">
              Welcome to PotterPortfolio
            </h1>
            <p className="text-lg">
              Hi, My name is Potter. I am student of the University of Chiang
              Mai. My major is CAMT.
            </p>
          </div>
          <div className="h-5/6">
            <img src={potter} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 w-full py-12">
        <AboutPotter />
      </section>
    </>
  );
};

export default styled(PotterPort)``;
