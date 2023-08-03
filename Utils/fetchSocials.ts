import { Social } from "../typings"

export const fetchSocial = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}

// export const fetchSocial = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  
//     // check if the response was successful
//     if (!res.ok) {
//       throw new Error(`Server responded with status: ${res.status}`);
//     }
  
//     const data = await res.json();
//     const socials: Social[] = data.socials;
  
//     return socials;
//   };