import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="bg-zinc-900 text-white px-7  p-5 rounded-lg flex flex-col md:flex-row justify-between items-center w-[90vw]  mx-auto text-center md:text-left">
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">Ashu Dureja</h2>
        <p className="text-sm font-bold">ashudurej0@gmail.com</p>
      </div>
      <div className="flex space-x-4 text-2xl">
        <FaGithub className="cursor-pointer hover:text-gray-400" />
        <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
};

export default Contacts;
