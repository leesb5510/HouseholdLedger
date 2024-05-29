import styled from "styled-components";

const WriteForm = () => {
  // 여기서 하는지?
  // 여기에 저장하고 싶은 데이터도 있고
  // 여기에 클릭할때 실행시킬 버튼 위치가 있으니까요
  // 우선 내가 해야하는거 1번
  // 저장버튼에 onClick 붙이기

  const save = () => {
    // save 함수를 클릭할때 날짜 항목 금액 내용의 최종 값을 필요로 해요.
    // 최종값을 어떻게 가져올 수 있을까?
    // input 값을 가져오는 방법, -? "리액트 input값 가져오는 방법"
    // 여기에서 어떤 변수로 모든 값들을 저장하고요
    // 그 값을 posts로 보내야겠죠?
    // 우리가 사물함이라고 저장해놨던 곳에 추가를 해야겠죠?
    // 사물함을 바꿔주는 함수가 여기 없잖아요
    // posts를 여기다가 끌고올 수 없을까?
    // props-drilling : 계속 찾아가야하는 그런 구조 맞아요
    // height: 100%; > > > > >
    // props-drilling을 하고 싶으면 어떻게 해야해요?

    // WriteForm 의 입력값을 저장하고 posts 로 보낼 때 사용
    console.log("save입니다.");
  };

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
      <SaveBtn onClick={save}>저장</SaveBtn>
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
