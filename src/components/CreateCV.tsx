import { Education } from "./Education.tsx";
import { Experience } from "./Experience.tsx";
import { Information } from "./Information.tsx";

export function CreateCV() {
  return (
    <div className="appDiv">
      <h1 className="p-3 mb-5 bg-dark text-white w-100 text-center">
        Your Wonderful CV
      </h1>
      <h1 className="text-primary text-center m-4">Personal Information</h1>
      <Information />
      <h1 className="text-primary text-center m-4">Experience</h1>
      <Experience />
      <h1 className="text-primary text-center m-4">Education</h1>
      <Education />

      <h5 className="bg-dark text-white mb-0 mt-5 p-4  w-100 text-xl-center">
        2023 Copyright: MartaZare
      </h5>
    </div>
  );
}
