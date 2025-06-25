import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const InputArea = styled.section`
    margin-bottom: 10px;
`;
const InputAreaLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;
const InputAreaInput = styled.input`
    width: 400px;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
`;
const InputAreaSelect = styled.select`
    display: block;
    margin-bottom: 10px;
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



function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
    e.preventDefault();


    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
        setIsLoading(true);

        const day = dayRef.current.value;
        const eng = engRef.current.value;
        const kor = korRef.current.value;

        fetch("http://localhost:3001/words", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day, 
                eng, 
                kor,
                isDone: false,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("저장 완료!");
                navigate(`/day/${day}`);
                setIsLoading(false);
            }
        });
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
    <form onSubmit={onSubmit}>
        <InputArea>
            <InputAreaLabel>Eng</InputAreaLabel>
            <InputAreaInput type="text" placeholder="computer" ref={engRef}></InputAreaInput>
        </InputArea>
        <InputArea>
            <InputAreaLabel>Kor</InputAreaLabel>
            <InputAreaInput type="text" placeholder="컴퓨터" ref={korRef}></InputAreaInput>
        </InputArea>
        <InputArea>
            <InputAreaLabel>Day</InputAreaLabel>
            <InputAreaSelect ref={dayRef}>
                {days.map((day) => (
                    <option key={day.id} value={day.day}>
                        Day {day.day}
                    </option>
                ))}
            </InputAreaSelect>
        </InputArea>

        <Button style={{ opacity: isLoading ? 0.3 : 1 }}>
            {isLoading ? "Saving..." : "저장"}
        </Button>
    </form>
    );
}


export default CreateWord;