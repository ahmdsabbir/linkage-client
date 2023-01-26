import React from "react";
import { useAppState } from "./context/AppProvider";

const Stepper = () => {
  const steps = ["1", "2", "3", "4", "5"];
  //   const [currentStep, setCurrentStep] = useState(3);
  const {
    state: { userSteps },
  } = useAppState();
  console.log(userSteps);
  return (
    <ul className="steps">
      {steps.map((step, i) => (
        <li
          key={i + step}
          className={`step ${userSteps == i + 1 && "step-primary"} "
          }`}
        ></li>
      ))}
    </ul>
  );
};

export default Stepper;
