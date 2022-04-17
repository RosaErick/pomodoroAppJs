import { useContext, useEffect } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const {
    pomodoro,
    pauseTimer,
    startTimer,
    executing,
    children,
    setCurrentTimer,
    SettingsButton,
    updateExecute,
    startAnimate,
  } = useContext(SettingContext);

  useEffect(() => updateExecute(executing), [executing, startAnimate]);

  return (
   <div className="container">
     <h1>Pomodoro App</h1>
      <small>simple and fast</small>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
          <>
            
          <div className="card">
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                callback={() => setCurrentTimer("work")}
              />
              <Button
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                callback={() => setCurrentTimer("short")}
              />
              <Button
                title="Long Break"
                activeClass={
                  executing.active === "longbreak" ? "active-label" : undefined
                }
                callback={() => setCurrentTimer("longbreak")}
              />
            </li>
          </ul>
          <Button title="Settings" callback={SettingsButton} />

          <div className="time-container">
            <div className="time-wrraper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>

          <div className="button-wrapper">
            <Button
              title="Start"
              clasName={!startAnimate ? "active" : undefined}
              callback={startTimer}
            />
            <Button
              title="Pause"
              clasName={startAnimate ? "active" : undefined}
              callback={pauseTimer}
            />
              </div>
      </div>
        </>
      )}
    </div>
  );
}

export default App;
