import styled from 'styled-components';

const Wrapper = styled.div`
  & > svg {
    position: fixed;
    z-index: 6;
    top: 45vh;
    left: 50vw;

    width: 80px;
    height: 80px;
  }
`;

export default Wrapper;
