import { sanityClient } from "@/sanity";
import { Project } from "@/typings";
import { groq } from "next-sanity";

// export const fetchProjects = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);
  
//     // check if the response was successful
//     if (!res.ok) {
//       throw new Error(`Server responded with status: ${res.status}`);
//     }
  
//     const data = await res.json();
//     const projects: Project[] = data.projects;
  
//     return projects;
//   };


export const fetchProjects = async () => {
  const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]  
  }
`;
  const res = await sanityClient.fetch(query);
  return res;
};