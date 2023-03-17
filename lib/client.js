import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient ({
    projectId: 'fyg3twnq',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// To make sanity give us urls where images are stored:
const builder = imageUrlBuilder(client);

export const  urlFor = (source) => builder.image(source); 