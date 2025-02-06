import { sql } from "@vercel/postgres"

export default async () => {

    await sql`DROP TABLE IF EXISTS ig_users, ig_posts, ig_likes;`

    await sql`CREATE TABLE IF NOT EXISTS ig_users (
        user_id UUID DEFAULT uuid_generate_v4() SERIAL PRIMARY KEY,
        username TEXT,
        name TEXT,
        picture TEXT,
        email text UNIQUE
    );`
    await sql`CREATE TABLE IF NOT EXISTS ig_posts (
        post_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        content TEXT,
        url TEXT,
    );`


    //TODO: FOREIGN KEY
    await sql`CREATE TABLE ig_likes (
        FOREIGN KEY (user_id) REFERENCES ig_users(user_id),
        FOREIGN KEY (post_id) REFERENCES ig_posts(post_id),
        PRIMARY KEY (user_id, post_id)
    );`

}
return <p>Base de datos seed</p>