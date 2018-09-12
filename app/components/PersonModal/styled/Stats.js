import styled from 'styled-components';

const Stats = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 25px;

  & p {
    font-size: 15px;
    margin-top: 15px;
    font-weight: 700;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export default Stats;
