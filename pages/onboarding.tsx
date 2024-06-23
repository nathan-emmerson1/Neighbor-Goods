/* eslint-disable react/jsx-key */

import MultiStepUserDetails from "@/components/multiuserdetails";
import Location from "@/components/location";
import UploadProfilePicture from "@/components/uploadprofilepicture";
import SkillsList from "@/components/skillslist";

export default function Onboarding() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    MultiStepUserDetails([<Location />, <SkillsList />, <UploadProfilePicture /> ]);

  const handleNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    next()
  }

  const handleBack = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    back()
  }
  
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/images/background-image.png" }}
      >
        <div className="hero-overlay bg-black bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <form>
                  <div>
                    {currentStepIndex + 1} /{steps.length}
                  </div>
                  {step}
                  <div className="">
                    {!isFirstStep && (
                      <button className="btn btn-primary" onClick={handleBack}>
                        Back
                      </button>
                    )}
                    <button className="btn btn-primary" onClick={handleNext}>
                      {isLastStep ? "Finish" : "Next"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
