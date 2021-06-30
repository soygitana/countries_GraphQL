import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 100px;
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
  margin-top: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
