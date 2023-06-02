import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[14] text-[#f1f1f1] font-semibold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
