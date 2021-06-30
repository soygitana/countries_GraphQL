import styled from "styled-components";

export const Country = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 200px;
  margin: 15px 10px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 2px solid;
  text-decoration: none;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.darkGrey};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 70%;
  height: 100%;
`;
