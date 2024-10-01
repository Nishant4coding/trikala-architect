import aesehi from "@/assets/aesehi.png";
import Sections from "../Section";

function Featured() {
  return (
    <Sections>
      <div className=" lg:h-[100vh] w-full">
        {/* <img src={aesehi} alt="" className='absolute '/>
        <img src={aesehi} alt="" /> */}
        <h1 className="relative text-6xl  top-[3vh] lg:top-[8vh] z-10 md:text-6xl lg:text-9xl font-custom text-left">
          Featured Work
        </h1>
        <div className="flex flex-col ">
          {/* Image placeholder */}
          <img
            src={aesehi} // Replace with your image URL
            alt="Featured work"
            className="lg:h-[60vh] w-[60vw]"
          />

          <div className=" relative lg:bottom-[20vh] bottom-[5vh] lg:ml-[50vw] ml-[30vw]  bg-[#6f4638] p-4 text-white shadow-lg lg:h-[40vh] lg:w-auto   h-auto ">
            <h3 className="text-lg font-bold mb-2">Yorem ipsum d</h3>
            <p className="text-sm">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
            </p>
          </div>
        </div>
      </div>
    </Sections>
  );
}

export default Featured;
