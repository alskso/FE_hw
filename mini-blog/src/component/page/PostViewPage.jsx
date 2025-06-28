import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CommentList from "../list/CommentList";


import Button from "../ui/Button";

function PostViewPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("게시글을 찾을 수 없습니다.");
                }
                return res.json();
            })
            .then((data) => {
                setPost(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setPost(null);
                setIsLoading(false);
            });
    }, [id]);

    const realDelete = () => {
        const real_delete = window.confirm("정말 삭제하시겠습니까?");
        if (!real_delete) return;

        fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
        })
        .then((res) => {
            if (res.ok) {
            alert("삭제되었습니다.");
            navigate("/"); 
            } else {
            alert("삭제에 실패했습니다.");
            }
        })
    };
    if (isLoading) {
        return <p>로딩 중...</p>;
    }

    return (
        <div className="post_view">
            <div className="button_view">
                <Link to="/"><Button>뒤로 가기</Button></Link>
                <Button onClick={realDelete}>글 삭제하기</Button>
            </div>

            {post ? (
                <div className="post_container">
                    <div className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>

                    <div className="comment_container">
                        <CommentList comments={post.comments || []} />
                    </div>
                    
                </div>
            ) : (
                <p>해당 게시글이 존재하지 않습니다.</p>
            )}

            <Link to="/">
                <Button>댓글 작성하기</Button>
            </Link>
        </div>
    );
}

export default PostViewPage;
