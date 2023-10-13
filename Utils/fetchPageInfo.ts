import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";
import { groq } from "next-sanity";

// export const fetchPageInfo = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  
//     if (!res.ok) {
//       throw new Error(`Server responded with status: ${res.status}`);
//     }
  
//     const data = await res.json();
//     const pageInfo:PageInfo = data.pageInfo;
  
//     return pageInfo;
// };


export const fetchPageInfo = async () => {
  const query = groq`
  *[_type == "pageInfo"][0]
`;
  const res = await sanityClient.fetch(query);
  return res;
};
