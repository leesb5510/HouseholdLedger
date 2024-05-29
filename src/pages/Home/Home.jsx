import { Link } from "react-router-dom";
import styled from "styled-components";
import MonthFilterForm from "../../components/MonthFilterForm";
import PostList from "../../components/PostList";
import WriteForm from "../../components/WriteForm";

const Home = () => {
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
      <Link to="/detail/324235">상세페이지로 이동</Link>
    </Main>
  );
};

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

export default Home;
