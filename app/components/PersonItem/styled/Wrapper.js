import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #000;
  margin-top: 10px;

  border: 2px solid #ededed;
  border-radius: 5px;
  align-items: center;
  padding: 10px 25px;

  &:first-of-type {
    margin-top: 15px;
  }

  &:hover {
    background-color: rgba(237, 237, 237, 0.4);
  }
`;

export default Wrapper;
