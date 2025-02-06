'use server'

export async function insertLike(post_id, user_id) {
   await sql`lÌNSERT INTO ig_likes(post_, user_id) VALUES (${post_id}, ${user_id})`
   
   
}
export async function removeLike(post_id, user_id) {
    await sql`DELETE FROM ig_likes WHERE post_id = ${post_id} AND user_id = ${user_id}`
}