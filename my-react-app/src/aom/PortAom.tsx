import React from "react";

const PortAom = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Natchayaphorn Janthima (Aom)</h1>
        <p className="text-xl text-gray-600">System Analysis</p>
        <p className="text-md text-gray-500">Phone: 096-720-9631 | Email: Aom.work4@gmail.com</p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          I am a System Analyst with expertise in analyzing and designing systems to optimize efficiency. My experience spans across different domains, from frontend development to backend systems, ensuring smooth integration of solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Frontend:</strong> ThaiLife Insurance</li>
          <li><strong>Backend:</strong> xplORe</li>
          <li><strong>System Analysis:</strong> YES-Yamaha</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Programming Languages:</strong> SQL</li>
          <li><strong>Frameworks/Libraries:</strong> React</li>
          <li><strong>Tools:</strong> Git, Docker, AWS</li>
          <li><strong>Other:</strong> Agile Methodology, UX/UI Design</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-gray-700">
          <strong>Digital Industry Integration (DII)</strong> - CAMT College of Arts, Media and Technology, Chiang Mai University
        </p>
      </section>
    </div>
  );
};

export default PortAom;
