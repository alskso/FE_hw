import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const ListDay = styled.section`
    display: flex;
    flex-wrap: wrap;  
`;

const ListDayLi = styled.section`
    flex: 20% 0 0;
    box-sizing: border-box;
    padding: 10px;
`;

const ListDayA = styled.section`
    display: block;
    padding: 20px 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    background-color: dodgerblue;
`;

function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <ListDay>
            {days.map((day) => (
                <ListDayLi key={day.id}>
                    <Link to={`/day/${day.day}`}><ListDayA>Day</ListDayA>{day.day}</Link>
                </ListDayLi>
            ))}
        </ListDay>
    );
}

export default DayList;