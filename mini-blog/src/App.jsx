import { Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/:id" element={<PostViewPage />}></Route>
        <Route path="/write" element={<PostWritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
