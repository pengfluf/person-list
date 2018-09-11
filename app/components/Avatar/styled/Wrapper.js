import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || 50}px;
  height: ${({ size }) => size || 50}px;
  background-color: #dee9fb;
  color: #3d78c9;
  font-weight: 700;
  font-size: ${({ size }) => size / 3.125}px;
`;

export default Wrapper;
