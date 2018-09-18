import styled from 'styled-components';

const Line = styled.hr`
  width: ${({ context }) =>
    context === 'PersonList' ? 'calc(100% + 20px * 2)' : '100%'};
  height: 1px;
  border: 0;
  border-top: 2px solid #ededed;
  margin-bottom: 0;
  margin-top: ${({ context }) =>
    context === 'PersonList' ? '20px' : '25px'};

  ${({ context }) =>
    context === 'PersonList' &&
    `
      position: relative;
      left: -20px;
    `};
`;

export default Line;
