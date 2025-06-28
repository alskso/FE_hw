import React from "react";

function CommentListItem({ content }) {
    return (
        <div className="comment_item">
            <p>{content}</p>
        </div>
    );
}

export default CommentListItem;
