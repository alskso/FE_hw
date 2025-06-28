// PostListItem.jsx
import React from 'react';


function PostListItem({ post, }) {
    return (
        <div>
            <h4 className='main_title'>{post.title}</h4>
        </div>
    );
}

export default PostListItem;