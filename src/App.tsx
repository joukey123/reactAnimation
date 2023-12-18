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
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-600, 600], [-360, 360]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.get());
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 5, 1]);
  const background = useTransform(
    x,
    [-600, 600],
    [
      "linear-gradient(135deg, rgb(0, 238, 238), rgb(0, 131, 238))",
      "linear-gradient(135deg, rgb(13, 226, 1), rgb(238, 210, 0))",
    ]
  );
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

    <Wapper style={{ background }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin></Box>
    </Wapper>
  );
}

export default App;
