import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: ${({ type }) =>
    type === 'delete' ? '#ef5350' : '#fff'};
  color: ${({ type }) => (type === 'delete' ? '#fff' : '#000')};
  border: 2px solid #d3d3d3;
  padding: 9px 25px;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;

  ${'' /* eslint-disable prettier/prettier */}
  &:hover {
    background-color: ${({ type }) =>
    type === 'delete' ? '#fff' : 'rgba(237, 237, 237, 0.4)'};
    color: ${({type}) => type === 'delete' ? '#ef5350' : '#000'};
  }
    ${'' /* eslint-enable */}

  &:first-of-type {
    margin-left: ${({ context }) => context !== 'PersonList' && 0};
  }

  ${({ context }) => context === 'AddPerson' && `width: 100%;`};
`;

export default Wrapper;
