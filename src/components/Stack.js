import stak from "../images/stack.png";
import { Accordian } from "./Accordian";
import { AnimatedComponent } from "../components/Observer";
import { Collapse, Fade, Slide, Zoom } from "@mui/material";

export function Stack() {
  // const [containerRef, isVisible] = UseElementOnScreen({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // });
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        <AnimatedComponent>
          <Zoom in={true}>
            <div className="flex flex-col">
              <Accordian
                title="Parlay Pots"
                data="Our unique P2P wagering system that allows users to take advantage
            of community driven “highest odds” and “most hits” Parlay Pots."
              />
              <Accordian title="Draft a parlay" data="Parlay Pots." />
              <Accordian
                title="Parlay of the week"
                data="Enter the Ultimate Showdown with our revolutionary <br />
        “Parlay Of The Week”. This weekly challenge is winner takes all in this
        battle of the best."
              />
            </div>
          </Zoom>
        </AnimatedComponent>
        <AnimatedComponent>
          <Zoom in={true}>
            <div className="relative flex justify-center items-center">
              <img
                className="h-[400px] md:absolute right-0 lg:right-[-100px] top-[-100px] object-cover"
                alt="Stak"
                src={stak}
              />
            </div>
          </Zoom>
        </AnimatedComponent>
      </div>
    </>
  );
}
