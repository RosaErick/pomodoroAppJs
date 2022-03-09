import { React, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

const CountdownAnimation = ({ timer = 20, animate = true, children }) => {
  const { stopTimer } = useContext(SettingContext);

  return (
    <CountdownCircleTimer
      isPlaying={animate}
      duration={timer * 60}
      colors={["#fe6f6b", 0.33]}
      strokeWidth={6}
      trailColor="#151932"
      size={220}
      onComplete={() => {
        stopTimer;
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
