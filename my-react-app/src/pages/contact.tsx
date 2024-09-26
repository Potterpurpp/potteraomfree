import React from "react";
import Potter from "../assets/Potter1.jpeg";
import Aom from "../assets/Aom.jpg";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  const contactUs = [
    {
      id: 1,
      name: "NUDDANAI KLAIKLIN",
      email: "nuddanai_klaiklin@cmu.ac.th",
      phone: "0991364527",
      img: Potter,
      jobTitle: "Student",
      Faculty: "College of Arts, Media and Technology",
    },
    {
      id: 2,
      name: "NATCHAYAPHORN JANTHIMA",
      email: "natchayaphorn_janthima@cmu.ac.th",
      phone: "0991364527",
      img: Aom,
      jobTitle: "Student",
      Faculty: "College of Arts, Media and Technology",
    },
  ];
  return (
    <>
      <header className="mb-1">
        <h1 className="text-4xl font-bold text-center text-[#00df9a] mt-8">
          ติดต่อนักพัฒนา
        </h1>
      </header>

      <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-2 place-content-evenly">
          {contactUs.map((contact) => (
            <div className="flex items-center flex-col">
              <h1 className="font-normal text-2xl">คุณ {contact.name}</h1>
              <br />
              <img
                src={contact.img}
                alt="Potter"
                className="h-3/5 w-5/6 object-cover"
              ></img>
              <br />
              <h2>Email: {contact.email}</h2>
              <h2>Phone: {contact.phone}</h2>
              <h2>JobTitle: {contact.jobTitle}</h2>
              <h2>Faculty: {contact.Faculty}</h2>
              <br />
              {contact.id == 1 ? (
                <Link
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  to={"/potterport"}
                >
                  Explore More
                </Link>
              ) : (
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Explore More
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
