import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Drag Box, animaion Box

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BigBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const boxVars = {
  over: {
    scale: 1.1,
    rotateZ: 90,
  },
  click: {
    scale: 0.8,
    borderRadius: "50%",
  },
};

const svgVars = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: { pathLength: 1, fill: "rgba(255,255,255, 1)" },
};
//SVG animation
const Svg = styled.svg`
  width: 200px;
  height: 200px;
  path {
    stroke: white;
    stroke-width: 3;
  }
`;

function App() {
  //drag Box, animation Box
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  //박스 회전
  const rotateZ = useTransform(x, [-600, 600], [-360, 360]);

  //배경색깔 변경
  const background = useTransform(
    x,
    [-600, 600],
    [
      "linear-gradient(135deg, rgb(0, 238, 238), rgb(0, 131, 238))",
      "linear-gradient(135deg, rgb(13, 226, 1), rgb(238, 210, 0))",
    ]
  );

  //스크롤 박스크기 변경
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 5, 1]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.get());
  });
  return (
    /* DRAG 박스
    <Wapper>
      <BigBox ref={biggerBoxRef}>
        <Box
          variants={boxVars}
          drag
          dragSnapToOrigin
          dragConstraints={biggerBoxRef}
          whileHover="over"
          whileTap="click"
        />
      </BigBox>
    </Wapper>
    */

    // <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin></Box>

    //Svg animation
    <Wapper style={{ background }}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svgVars}
          initial="start"
          animate="end"
          transition={{
            default: {
              duration: 3,
            },
            fill: {
              duration: 2,
              delay: 1,
            },
          }}
          d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
        />
      </Svg>
    </Wapper>
  );
}

export default App;
