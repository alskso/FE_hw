import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import styled from "styled-components";


const AppClass = styled.section`
  width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppClass>
      <Header/>
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </AppClass>
  );
}

export default App;
