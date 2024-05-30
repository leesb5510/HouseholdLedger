import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MonthFilterForm from "../../components/MonthFilterForm";
import PostList from "../../components/PostList";
import WriteForm from "../../components/WriteForm";

const Home = ({ expenses, setExpenses }) => {
  const [month, setMonth] = useState([]);

  console.log(month);
  console.log("expenses:", expenses);

  const filteredExpenses = expenses.filter((expense) => {
    expense.month === month;
  });

  return (
    <Main>
      <Section>
        <WriteForm
          month={month}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </Section>
      <Section>
        <MonthFilterForm month={month} setMonth={setMonth} />
      </Section>
      <Section>
        <PostList expenses={filteredExpenses} />
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

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default Home;
