import React from "react";
import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
    return (
        <div>
            <h4>댓글</h4>
            {comments.map((comment) => (
                <CommentListItem
                key={comment.id}
                content={comment.content}
                />
            ))}
        </div>
    );
}

export default CommentList;
