import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  width: 50vw;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const overviewVar = {
  start: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};
function App() {
  const [id, setId] = useState<string | null>(null);

  return (
    <Wapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box key={n} onClick={() => setId(n)} layoutId={n} />
        ))}
      </Grid>

      {id && (
        <AnimatePresence>
          <Overlay
            variants={overviewVar}
            initial="start"
            animate="animate"
            exit="exit"
            onClick={() => setId(null)}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        </AnimatePresence>
      )}
    </Wapper>
  );
}

export default App;
