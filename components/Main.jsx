import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";


function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div
        className="max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center
      items-center"
      >
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something legendary togther
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Saeed Ashoor</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet tellus vestibulum, sagittis diam nec, imperdiet velit. Ut et
            facilisis elit. Nam euismod et lectus vitae ultricies. Mauris
            commodo
          </p>
          <div className="flex items-center justify-between  max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                  <BsPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
