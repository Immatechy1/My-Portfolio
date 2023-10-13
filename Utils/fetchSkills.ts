import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";
import { groq } from "next-sanity";


// export const fetchSkills = async () => {
//     const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

//     const data = await res.json();
//     const skills: Skill[] = data.skills;

//     return skills;
// }

export const fetchSkills = async () => {
    const query = groq`
  *[_type=="skills"]{
      ...,
      vendors->{...,title,logo,description},
      categories[]->{slug,title},
    }
  `;
    const res = await sanityClient.fetch(query);
    return res;
  };
