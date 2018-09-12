import styled from 'styled-components';

const Close = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 18px;
  height: 18px;
  outline: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    width: 100%;
    height: 3px;
    background-color: #7a7a7a;
  }

  &::before {
    left: 0px;
    transform: rotate(45deg);
  }

  &::after {
    right: 0px;
    transform: rotate(-45deg);
  }
`;

export default Close;
