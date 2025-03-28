import roadmap from "../images/roadmap.svg";
import roadmapvertical from "../images/roadmapvertical.svg";
import roadmapfill from "../images/roadmapfill.svg";
import rect from "../images/rect.svg";
import rectwhite from "../images/rectwhite.svg";

export function Roadmap(props) {
  return (
    <>
      <div className="w-full h-full flex flex-wrap md:flex-col items-center justify-center md:justify-start">
        <div className="w-full mb-5 relative justify-center items-center">
          <div className="h-full rotate-90 md:rotate-0 absolute left-[-100px] top-[90px] md:top-[-30px] md:left-[0px] w-2/3 md:w-full ">
            {props.fullfilled ? (
              <>
                <img
                  className="h-[20px] pl-5 relative"
                  alt="rect"
                  src={rectwhite}
                />
                <img
                  className="w-full h-[20px] absolute left-[20px] top-[0] z-[-1]"
                  alt="map"
                  src={roadmap}
                />
                <img
                  className="w-2/3 md:w-5/6 h-[50px] absolute left-8 top-[-15px] z-[-1]"
                  alt="map"
                  src={roadmapfill}
                />
              </>
            ) : (
              <>
                <img className="h-[20px] pl-5 relative" alt="rect" src={rect} />
                <img
                  className="w-full h-[20px] absolute left-[20px] top-[0] z-[-1]"
                  alt="map"
                  src={roadmap}
                />
              </>
            )}
          </div>
        </div>
        <div className="w-full h-full basis-4/4 flex flex-col">
          <div className="px-5 pb-0 text-2xl text-white text-left font-sora">
            {props.title}
          </div>
          <div className="mt-5 mb-0 md:mb-10 md:mt-10 px-5 leading-normal text-left">
            <span className="text-sm font-light text-white text-opacity-70">
              {props.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
