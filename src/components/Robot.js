import React, { useEffect } from "react";
import Lottie from "lottie-react";
import floatingRobotAnimation from "../assets/robot.json"; // Replace this with the actual animation file

const Robot = () => {
  useEffect(() => {
    console.log("Robot animation loaded!");
  }, []);

  return (
    <div className="robot-container">
      <Lottie animationData={floatingRobotAnimation} loop={true} />
    </div>
  );
};

export default Robot;