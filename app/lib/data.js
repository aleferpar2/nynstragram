import {sql} from "@vercel/postgres";

export  async function getPost()  {

 return (await sql`SELECT * FROM ig_posts`).rows;   
}

export async function getLikes(user_id) {
    return (await sql`SELECT post_id FROM ig_likes WHERE user_id = ${user_id}`).rows;
}