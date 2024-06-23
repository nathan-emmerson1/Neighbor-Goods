import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

export default function MultiStepUserDetails(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const router = useRouter();

  function next() {
    setCurrentStepIndex((i) => {
      if (i < steps.length - 1) return i + 1;
      router.push("/profilepage");
      return i;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i > 0) return i - 1;
      return i;
    });
  }

  function goTo(index: number) {
    if (index >= 0 && index < steps.length) setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
