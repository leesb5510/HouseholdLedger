import styled from "styled-components";
import MonthFilterForm from "./components/MonthFilterForm";
import PostList from "./components/PostList";
import WriteForm from "./components/WriteForm";

function App() {
  return (
    <Main>
      <Section>
        <WriteForm />
      </Section>
      <Section>
        <MonthFilterForm />
      </Section>
      <Section>
        <PostList />
      </Section>
    </Main>
  );
}

const Main = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default App;
