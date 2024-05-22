import styled from "styled-components";

const WriteForm = () => {
  return (
    <Container>
      <Div>
        <Label>날짜</Label>
        <Input placeholder="YYYY-MM-DD"></Input>
      </Div>
      <Div>
        <Label>항목</Label>
        <Input placeholder="지출 항목"></Input>
      </Div>
      <Div>
        <Label>금액</Label>
        <Input placeholder="지출 금액"></Input>
      </Div>
      <Div>
        <Label>내용</Label>
        <Input placeholder="지출 내용"></Input>
      </Div>
      <SaveBtn>저장</SaveBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;
const SaveBtn = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
export default WriteForm;
