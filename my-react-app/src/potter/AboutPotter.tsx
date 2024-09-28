const AboutPotter = () => {
  const skills = [
    {
      id: 1,
      skillName: "ReactJS",
      imgSkill:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
    },
    {
      id: 2,
      skillName: "Jenkins",
      imgSkill:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
    },
    {
      id: 3,
      skillName: "Amazon Web Service",
      imgSkill:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      id: 4,
      skillName: "SpringBoot",
      imgSkill:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    },
    {
      id: 5,
      skillName: "TypeScript",
      imgSkill:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    },
    {
      id: 6,
      skillName: "Xcode",
      imgSkill:
        "https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png",
    },
    {
      id: 7,
      skillName: "Linux Command",
      imgSkill: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    },
    {
      id: 8,
      skillName: "Grafana",
      imgSkill: "https://cdn.worldvectorlogo.com/logos/grafana.svg",
    },
    {
      id: 9,
      skillName: "Docker",
      imgSkill: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
  ];

  const stats = [
    { value: "100%", label: "Hottest" },
    { value: "200", label: "IQ" },
    { value: "100,000", label: "Bank Account" },
  ];

  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <header className="text-center py-8">
        <h2 className="text-6xl font-bold text-green-700 pb-3">
          One of the best student in Dii Major.
        </h2>
        <p className="text-2xl">
          Everyone already known as "The Great of DII".
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800 py-5 rounded-xl shadow-xl text-center"
          >
            <p className="text-6xl font-bold text-green-500">{stat.value}</p>
            <p className="text-2xl text-cyan-50">{stat.label}</p>
          </div>
        ))}
      </div>

      <h1 className="text-center text-4xl font-extrabold py-10">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div className="bg-grey-800 rounded-xl shadow-xl p-4 flex items-center justify-center gap-4">
            <h2 className="text-lg font-semibold">{skill.skillName}</h2>
            <img
              className="w-16 h-16 object-contain"
              src={skill.imgSkill}
              alt={skill.skillName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPotter;
