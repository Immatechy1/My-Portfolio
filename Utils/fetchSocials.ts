import { sanityClient } from "@/sanity";
import { Social } from "@/typings";
import { groq } from "next-sanity";

// export const fetchSocial = async () => {
//     const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

//     const data = await res.json();
//     const socials: Social[] = data.socials;

//     return socials;
// }

export const fetchSocial = async () => {
    const query = groq`
  *[_type=="socials"]{
      ...,
      vendors->{...,title,logo,description},
      categories[]->{slug,title},
    }
  `;
    const res = await sanityClient.fetch(query);
    return res;
  };
