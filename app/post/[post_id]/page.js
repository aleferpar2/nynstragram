import {auth0} from '@/app/lib/auth0';
import {getPost, getLike} from '@/app/lib/posts';
import Post from '@/app/ui/Post';

export default async ({params}) => {

    const post_id = (await params).post_id;
    const user_id = (await auth0).getSession().user.user_id;

    const post = (await getPost(post_id))[0];
    const user = (await getLike(user_id, post.id));

    return (
        <>
        <Post
        user_id={user.id}
        post_id={post.id}
        content={post.content}
        url={post.url}
        isLikedInicial={like.length > 0} 
        />
        </>
    )

}