import { Skill } from "../typings"

export const fetchSkills = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
}

// export const fetchSkills = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  
//     // check if the response was successful
//     if (!res.ok) {
//       throw new Error(`Server responded with status: ${res.status}`);
//     }
  
//     const data = await res.json();
//     const skills: Skill[] = data.skills;
  
//     return skills;
//   };