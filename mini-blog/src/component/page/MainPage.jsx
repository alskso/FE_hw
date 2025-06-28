import { useEffect, useState } from "react";
import PostList from '../list/PostList';
import data from '../../db/data.json';
import { Link } from 'react-router-dom';


import Button from "../ui/Button";
import Title from "../ui/Title";


function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data.posts);
    }, []);

    return (
        <div>
            <Title>
                <Link to="/">소플의 미니 블로그</Link>
            </Title>

            <Link to="/write">
                <Button>글 작성하기</Button>
            </Link>
            
            <PostList posts={posts} />
        </div>
    );
};

export default MainPage;
