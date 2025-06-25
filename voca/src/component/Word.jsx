import { useState } from "react";
import styled from "styled-components";


const Tr = styled.tr`
    &.off {
        background: #eee;
        color: #ccc;
    }
`; 
const TableTd = styled.td`
    width: 25%;
    height: 70px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;
`;
const TableTdFirst = styled.td`
    width: 25%;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;    
    width: 10%;
`;
const Button = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
`;
const ButtonDel = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    margin-left: 10px;
    color: #fff;
    background-color: firebrick;
`;



function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
    setIsShow(!isShow);
    }

    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if(window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then((res) => {
                if(res.ok) {
                    setWord({
                        ...word,
                        id: 0,
                    });
                }
            });
        }
    }

    if (word.id === 0) {
        return null; 
    }

    return (
        <Tr className={isDone ? "off" : ""}>
            <TableTdFirst>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </TableTdFirst>
            <TableTd>{word.eng}</TableTd>
            <TableTd>{isShow && word.kor}</TableTd>
            <TableTd>
                <Button onClick={toggleShow}>{isShow ? "뜻 숨기기" : "보기"}</Button>
                <ButtonDel onClick={del}>삭제</ButtonDel>
            </TableTd>
        </Tr>
    );
}

export default Word;





