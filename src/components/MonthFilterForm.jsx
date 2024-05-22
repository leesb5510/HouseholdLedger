import styled from "styled-components";

const MonthFilterForm = () => {
  return (
    <Ul>
      <Li>
        <Button>1월</Button>
      </Li>
      <Li>
        <Button>2월</Button>
      </Li>
      <Li>
        <Button>3월</Button>
      </Li>
      <Li>
        <Button>4월</Button>
      </Li>
      <Li>
        <Button>5월</Button>
      </Li>
      <Li>
        <Button>6월</Button>
      </Li>
      <Li>
        <Button>7월</Button>
      </Li>
      <Li>
        <Button>8월</Button>
      </Li>
      <Li>
        <Button>9월</Button>
      </Li>
      <Li>
        <Button>10월</Button>
      </Li>
      <Li>
        <Button>11월</Button>
      </Li>
      <Li>
        <Button>12월</Button>
      </Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Li = styled.li``;

const Button = styled.button`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--black-alpha-100, #000);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--black-alpha-100, #f6f7fa);
`;

export default MonthFilterForm;
