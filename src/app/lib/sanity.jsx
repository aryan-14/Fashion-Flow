import {createClient} from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'dh0wclq3',
    dataset:'production',
    apiVersion:'2024-05-27',
    useCdn:true,
});

const imgBuilder = ImageUrlBuilder(client);
export function urlFor(source){
    return imgBuilder.image(source);
}



