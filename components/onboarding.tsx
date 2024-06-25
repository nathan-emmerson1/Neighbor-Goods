/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useRouter } from "next/router";
import { UserDetails } from "@/models/userDetails"

const skillsList = [
  "Gardening",
  "Cleaning",
  "Cooking",
  "Building",
  "Auto",
  "Crafts",
  "Health",
  "Fitness",
  "Art",
  "Music",
  "Education",
  "Tutoring",
  "Food",
  "Sport",
  "Culture",
  "Language",
  "Other",
];

export default function Onboarding() {
  const router = useRouter()
  
  //const [dateOfBirth, setDateOfBirth] = useState(0)
  const [userDetails, setUserDetails] = useState<UserDetails>({
    age: "",
    phone: "",
    location: "",
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async () => {
    setUserDetails({
      age,
      phone,
      location,
    })
    router.push('/profilepage')
  };

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <>
      <h2 className="card-title title-center">Where is your NeighbourGood?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="e.g Porirua"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>

      <h2 className="card-title title-center">What`s your phone number?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="e.g. 027 000 0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <h2 className="card-title title-center">What year were you born?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>

        <input
          type="date"
          className="grow"
          placeholder="e.g. 1969"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>

      <h2 className="card-title title-center">
        What skills you can bring to your NeighbourGood?
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skillsList.map((skill) => (
          <button
            key={skill}
            className={`px-4 py-2 border rounded-full ${
              selectedSkills.includes(skill)
                ? "bg-blue-500 text-white"
                : "bg-white text-black border gray-300"
            }`}
            onClick={() => toggleSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
      <h2 className="card-title title-center">Add a Profile Picture</h2>

      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {selectedImage && (
        <div>
          <img src={selectedImage} alt="preview" />
        </div>
      )}

      <button className="btn btn-primary" onClick={handleSubmit}>Let me in!</button>
    </>
  );
}
