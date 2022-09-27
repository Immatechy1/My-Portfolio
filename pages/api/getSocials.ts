// Next.js API route Support: https://nextjs.org.docs/api-routes/introduction
import type { NextApiRequest,  NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { social,  } from "../../typings"

// Execute querry
const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: social[] = await sanityClient.fetch(query);
    res.status(200).json({ socials })
}
  