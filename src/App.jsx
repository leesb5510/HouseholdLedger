// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

function App() {
  // const [posts, setPosts] = useState();

  // 항목 - 글
  // 글 복수에요 단수에요?
  // 글이라는 것 자체는 데이터가 뭐가 있어요? 날짜 / 항목 / 금액 / 내용 이 들어가있겠죠
  // {날짜: 날짜값, 항목: 항목값, 금액: 금액값, 내용: 내용값}
  // 글 복수
  // 글을 복수로 저장할때는? 여러개를 저장하고 싶으면?

  // 사물함
  // 하나만 있으면 구분해서 넣지 않아도 돼요
  // {}, {}, {}, {}, {} 바구니만 여러개 분리한거니까요
  // [{}, {}, {}, {}, {}]

  // posts = [{날짜: 날짜값, 항목: 항목값..}];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
