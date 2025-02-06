import React from 'react';
import { HeartIcon } from './@heroicons/react/20/solid';
import {insertLike} from '../lib/actions';
import clsx from 'clsx';
import { useState } from 'react';

export default async ({ post_id, user_id, isLikedInit }) => {
    let [isLiked, setisLike] = useState(isLikedInit);
    

    function toogleLike(){
        if (isLiked) {
            removeLike(post_id, user_id);
            setisLike(false);
        }
        else {
            insertLike(post_id, user_id);
            setisLike(true);  
        }
        ;
    }

    
    
    
    insertLikePOST();
    return (

        <HeartIcon onClick={toogleLike} className={clsx('w-8', { 'text-red-600': isLiked })} />
    )
}