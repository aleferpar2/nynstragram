import { sql } from "@vercel/postgres";


export async function getPosts(){
    return (await sql`SELECT * FROM sa_posts JOIN sa_users USING(user_id)`).rows;
}

export async function getPost(post_id){
    return (await sql`SELECT * FROM sa_posts WHERE post_id=${post_id}`).rows;
}

export async function getLikes(user_id){
    return (await sql`SELECT post_id FROM sa_likes WHERE user_id = ${user_id}`).rows;
}

export async function getLike(user_id, post_id){
    return (await sql`SELECT post_id FROM sa_likes WHERE user_id = ${user_id} AND post_id=${post_id}`).rows;
}