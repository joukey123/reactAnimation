import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
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
  return (
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
  );
}

export default App;
