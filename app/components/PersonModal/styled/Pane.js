import styled from 'styled-components';

const Pane = styled.div`
  background-color: #f7f7f7;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: ${({ position }) =>
    position === 'top' ? 'space-between' : 'flex-end'};

  border-bottom: ${({ position }) =>
    position === 'top' ? '2px solid #e1e1e3' : 'none'};

  border-top: ${({ position }) =>
    position === 'bottom' ? '2px solid #e1e1e3' : 'none'};
`;

export default Pane;
