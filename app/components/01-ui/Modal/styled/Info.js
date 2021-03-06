import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ context }) => context === 'AddPerson' && `max-width: 280px;`};
`;

export default Info;
