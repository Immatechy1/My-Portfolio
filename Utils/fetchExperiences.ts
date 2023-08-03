import { Experience } from "../typings"

// export const fetchExperiences = async () => {
//     const res = await fetch ( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     return experiences;
// }

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  
    // check if the response was successful
    if (!res.ok) {
      throw new Error(`Server responded with status: ${res.status}`);
    }
  
    const data = await res.json();
    const experiences:Experience[] = data.experiences;
  
    return experiences;
  };