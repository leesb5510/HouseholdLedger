import { Link } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  return (
    <Root>
      <InputHolder>
        <InputCard>
          <Label for="date">날짜</Label>
          <Input type="text" id="date" placeholder="YYYY-MM-DD"></Input>
        </InputCard>
        <InputCard>
          <Label for="item">항목</Label>
          <Input type="text" id="item" placeholder="지출항목"></Input>
        </InputCard>
        <InputCard>
          <Label for="amount">금액</Label>
          <Input type="number" id="amount" placeholder="지출금액"></Input>
        </InputCard>
        <InputCard>
          <Label for="description">내용</Label>
          <Input type="text" id="description" placeholder="지출내용"></Input>
        </InputCard>
        <BtnHolder>
          <Button1>수정</Button1>
          <Button2>삭제</Button2>
          <Button3>
            <Link to="/">뒤로가기</Link>
          </Button3>
        </BtnHolder>
      </InputHolder>
    </Root>
  );
};

export default Detail;

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const InputHolder = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;

const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const BtnHolder = styled.div`
  display: flex;
  gap: 10px;
`;

const Button1 = styled.button`
  padding: 10px 20px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const Button2 = styled.button`
  padding: 10px 20px;
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const Button3 = styled.button`
  padding: 10px 20px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
