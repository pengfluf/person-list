import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: #fff;
  border: 2px solid #d3d3d3;
  padding: 9px 25px;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;

  &:hover {
    background-color: rgba(237, 237, 237, 0.4);
  }

  &:first-of-type {
    margin-left: ${({ context }) => context !== 'PersonList' && 0};
  }
`;

export default Wrapper;
