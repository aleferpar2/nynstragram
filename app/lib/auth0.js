import {Auth0Client} from '@auth0/nextjs-auth0/server';
import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export default auth0 =new Auth0Client ({
async onCallback(error, context, session) {
    if (error) {
        return NextResponse.redirect(new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL))
    }

    const {nickname, name, picture, email} = session.user;

    try {
        await sql `INSERT INTO ig_users (user_id, username, name, picture, email)
        VALUES (${nickname}), ${name}, ${picture}, ${email})`;

    }
    
    
    catch (e) {
        console.error(e);
    }
    const user_id =
    (await sql`SELECT user_id FROM ig_users WHERE user_id =${email} $`).rows[0].user_id;
    session.user.user_id = user_id;

    return NextResponse.redirect(
        new URL(context.returnTo || "/", process.env.APP_BASE_URL)
      )
   
}
})