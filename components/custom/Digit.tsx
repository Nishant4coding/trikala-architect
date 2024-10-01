import NumberTicker from "@/components/ui/number-ticker";
import bg from "@/assets/Digit.png";
import Sections from "../Section";
// import IconCloud from '@/components/ui/icon-cloud';
// import logo from '@/assets/logo.png';

function Digit() {
  // const slugs = [
  //   "typescript",
  //   "javascript",
  //   "dart",
  //   "java",
  //   "react",
  //   "flutter",
  //   "android",
  //   "html5",
  //   "css3",
  //   "nodedotjs",
  //   "express",
  //   "nextdotjs",
  //   "prisma",
  //   "amazonaws",
  //   "postgresql",
  //   "firebase",
  //   "nginx",
  //   "vercel",
  //   "testinglibrary",
  //   "jest",
  //   "cypress",
  //   "docker",
  //   "git",
  //   "jira",
  //   "github",
  //   "gitlab",
  //   "visualstudiocode",
  //   "androidstudio",
  //   "sonarqube",
  //   "figma",
  // ];

  return (
    <Sections className="lg:max-h-screen mt-32">
      <h1 className="text-6xl md:text-6xl lg:text-9xl font-custom text-center">
        At a Glance
      </h1>
      <div
        className="relative lg:h-[80vh] md:h-[60vh] mr-[2.5vw] bg-cover bg-fit lg:bg-center text-white"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="flex flex-row justify-end items-center h-full">
          <div className=" lg:top-[8vw] md:top-[3vw] top-[2vw] right-0 bg-[#774931] p-4 md:p-6 shadow-lg w-1/3 md:w-40 lg:w-40 font-[Roboto] text-center md:mr-[-70px] -mr-8 flex flex-col gap-5 md:gap-10">
            <h2 className="text-md md:text-xl lg:text-2xl font-bold text-left">
              We are <br /> proven by
            </h2>
            <div className="">
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                <NumberTicker value={200} />
              </span>
              <h3 className="text-xs md:text-sm font-semibold">Total Work</h3>
            </div>
            <div className="">
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                <NumberTicker value={200} />
              </span>
              <h3 className="text-xs md:text-sm font-semibold">Total Work</h3>
            </div>
            <div className="mb-0 md:mb-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                <NumberTicker value={200} />
              </span>
              <h3 className="text-xs md:text-sm font-semibold">Total Work</h3>
            </div>
          </div>
        </div>
      </div>
    </Sections>
  );
}

export default Digit;
