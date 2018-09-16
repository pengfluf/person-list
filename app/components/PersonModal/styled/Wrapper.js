import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e1e1e3;
  min-width: 420px;
  width: 42vw;
  max-width: 500px;

  @media (min-width: 1200px) {
    width: 30vw;
  }
`;

export default Wrapper;
