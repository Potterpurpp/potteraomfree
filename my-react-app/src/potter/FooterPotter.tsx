import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const FooterPotter = () => {
  const contactInfo = [
    {
      name: "LinkedIn",
      value: "linkedinaccount",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nuddanai-klaiklin-975056263/",
    },
    {
      name: "Facebook",
      value: "facebookaccount",
      icon: Facebook,
      url: "https://www.facebook.com/nuddanai.klaiklin.1/",
    },
    {
      name: "Instagram",
      value: "instagramaccount",
      icon: Instagram,
      url: "https://www.instagram.com/potterpurpp/",
    },
    {
      name: "YouTube",
      value: "youtubeaccount",
      icon: Youtube,
      url: "https://www.youtube.com/@potterpurpp809",
    },
  ];

  return (
    <footer className="bg-gray-800 text-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          My Contact Information
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 md:border-l md:border-green-500 first:border-l-0 px-4"
            >
              <p className="text-xl font-semibold">{info.name}</p>
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-100 transition-colors duration-300"
              >
                <info.icon size={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterPotter;
