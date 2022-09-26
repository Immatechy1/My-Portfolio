import { social } from "../typings"

export const fetchsocial = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/socials`);

    const data = await res.json();
    const socials: social[] = data.socials;

    // console.log("fetching", socials);

    return socials;
}