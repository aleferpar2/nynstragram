import Post from "./post"
import { getPosts, getLikes } from "../lib/actions";
import auth0 from "../lib/auth0";


export default async() => {

    //Todo: lanzar las dos consultas a la vez
    const posts = await getPosts();
    const user_id = (await auth0.getSessions()).user.user_id;

    const likes = await getLikes(user_id);


    function inLikes(likes, post_id){
        for (const like of likes){
            if (like.post_id === post_id){
                return true;
            }
        }
        return false;
    }
    return (
        <div className="flex flex-col grow items-center gap-8 mt-28">
          {
          
          posts.map((post => <Post 
            key={post.post_id} 
            post_id={post.post_id} 
            url={post.url}
            isLikeInit={inLikes(likes, post.post_id)}
            content={post.content}
            user_id={user_id} />))
          
          }
        </div>
    )
}