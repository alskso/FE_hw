import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import Button from "../ui/Button";
import Title from "../ui/Title";
import TextInput from "../ui/TextInput";

export default function PostWritePage() {
    const navigate = useNavigate();
    const titleUse = useRef(null);
    const contentUse = useRef(null);
    const [isLoading, setIsLoading] = useState(false);



    function onSubmit(e) {
        e.preventDefault();

        const title = titleUse.current.value;
        const content = contentUse.current.value;

        if (!title || !content) {
            alert("빈칸을 입력해주세요.");
            return;
        }

        setIsLoading(true);
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            title,
            content,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("게시글이 등록되었습니다.");
                navigate("/");
                setIsLoading(false);
            } else {
                alert("게시글 등록 실패.");
                setIsLoading(false);
            }
        });
    }

    return (
        <div>
            <Title>
                <Link to="/">나의 미니 블로그</Link>
            </Title>

            <form onSubmit={onSubmit}>
                <TextInput placeholder="제목을 입력하세요." ref={titleUse}></TextInput>
                <TextInput
                    placeholder="내용을 입력하세요."
                    ref={contentUse}
                ></TextInput>

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "작성 중..." : "작성 완료"}
                </Button>
            </form>
        </div>
    );
}