import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";


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


function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function addDay() {
        fetch("http://localhost:3001/days", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("생성이 완료되었습니다!");
            navigate("/");
            }
        });
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <Button onClick={addDay}>Day 추가</Button>
        </div>
    );
}

export default CreateDay;