import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 200px;
  font-weight: bold;
  font-size: 30px;
`;
const boxVars = {
  entry: (isback: boolean) => ({
    x: isback ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isback: boolean) => ({
    x: isback ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};
function App() {
  const [show, setShow] = useState(1);
  const [back, setBack] = useState(false);

  const nextBtn = () => {
    setBack(false);
    setShow((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevBtn = () => {
    setBack(true);
    setShow((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVars}
          initial="entry"
          animate="center"
          exit="exit"
          key={show}
        >
          {show}
        </Box>
      </AnimatePresence>
      <button onClick={nextBtn}> Next </button>
      <button onClick={prevBtn}> Prev </button>
    </Wapper>
  );
}

export default App;
