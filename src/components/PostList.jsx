import styled from "styled-components";

const PostList = () => {
  return (
    <PostContainer>
      <Card>
        <Div>
          <Span>2024-02-02</Span>
          <Span>식비 - 회식</Span>
        </Div>
        <Span> 50,000원</Span>
      </Card>
      <Card>
        <Div>
          <Span>2023-02-02</Span>
          <Span>간식 - 아이스크림</Span>
        </Div>
        <Span>500원</Span>
      </Card>
      <Card>
        <Div>
          <Span>2024-02-02</Span>
          <Span>여행 - 일본여행</Span>
        </Div>
        <Span> 1,055,000원</Span>
      </Card>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Span = styled.span`
  font-size: 16px;

  &:first-child {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }

  &:last-child {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export default PostList;
