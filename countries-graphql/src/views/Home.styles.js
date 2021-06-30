import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  margin: 100px 0;
  padding: 30px 60px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 20px;
  border: 2px solid;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
`;