import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import { publicRuntimeConfig } from "../next.config";

export const client = sanityClient ({
    projectId: 'fyg3twnq',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: false, // Be careful about this, section. 'false' prevents one warning, but cause security issues.
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN && process.env.SANITY_TOKEN,
    // token: publicRuntimeConfig.MY_NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

// To make sanity give us urls where images are stored:
const builder = imageUrlBuilder(client);

export const  urlFor = (source) => builder.image(source);