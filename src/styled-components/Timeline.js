import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-family: GT Walsheim;
`;

export const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

export const Line = styled.div`
  background-color: #505c62;
  width: 2px;
  position: relative;
  margin-left: 50%;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    margin-left: 3%;
  }
`;

export const BlocContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 5%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BlocItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  text-align: center;

  position: relative;
  width: 80%;
  left: ${({ id }) => id === 1 && `-100%`};
  padding-top: 10%;
  padding-bottom: 10%;
  @media screen and (max-width: 1100px) {
    ${({ id }) =>
      id !== 2 &&
      `
      left: 0;
      width: 80%;
      `};
  }
  @media screen and (max-width: 700px) {
    left: -5%;
    width: 80%;
    text-align: left;
  }
`;

export const Title = styled.span`
  font-size: 20pt;
  color: #505c62;
  margin-top: ${({ id }) => id === 0 && `5%`};
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const Paragraph = styled.p`
  font-size: 15pt;
  line-height: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`;

export const LastContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
`;

export const LastSentence = styled.span`
  font-size: 25pt;
  color: #505c62;
  @media screen and (max-width: 500px) {
    font-size: 19pt;
  }
`;
