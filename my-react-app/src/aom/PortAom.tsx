import {
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaLaptopCode,
  FaTools,
  FaUniversity,
} from "react-icons/fa";

const PortAom = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2 text-gray-800 hover:text-green-600 transition duration-300">
          Natchayaphorn Janthima (Aom)
        </h1>
        <p className="text-xl text-gray-600 mb-4">System Analyst</p>
        <div className="flex justify-center items-center space-x-6">
          <p className="text-md text-gray-500 flex items-center">
            <FaPhone className="mr-2 text-green-500" /> 096-720-9631
          </p>
          <p className="text-md text-gray-500 flex items-center">
            <FaEnvelope className="mr-2 text-green-500" />
            <a
              href="mailto:Aom.work4@gmail.com"
              className="text-green-500 hover:underline"
            >
              Aom.work4@gmail.com
            </a>
          </p>
        </div>
      </header>

      {/* Overview Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaBriefcase className="mr-3 text-green-500" /> Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate System Analyst with expertise in analyzing and
          designing systems to optimize efficiency. My experience spans across
          various domains, from frontend development to backend systems,
          ensuring smooth integration of solutions for diverse industries.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaLaptopCode className="mr-3 text-green-500" /> Projects
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-8">
          <li>
            <strong>Frontend Development:</strong> ThaiLife Insurance
          </li>
          <li>
            <strong>Backend Development:</strong> xplORe
          </li>
          <li>
            <strong>System Analysis:</strong> YES-Yamaha
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaTools className="mr-3 text-green-500" /> Skills
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-8">
          <li>
            <strong>Programming Languages:</strong> SQL
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> React
          </li>
          <li>
            <strong>Tools:</strong> Git, Docker, AWS
          </li>
          <li>
            <strong>Other Expertise:</strong> Agile Methodology, UX/UI Design
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaUniversity className="mr-3 text-green-500" /> Education
        </h2>
        <p className="text-lg text-gray-700">
          <strong>Digital Industry Integration (DII)</strong> - CAMT College of
          Arts, Media and Technology, Chiang Mai University
        </p>
      </section>
    </div>
  );
};

export default PortAom;
