import styled from 'styled-components';
import { darken } from 'polished';

export const Btn = styled.button`
  border: 0;
  background: #7159c1;
  height: 40px;
  color: #fff;
  padding: 0 15px;
  border-radius: 4px;
  font-weight: bold;
  align-self: flex-end;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#7159c1')};
  }

  @media (max-width: 767px) {
    align-self: stretch;
  }
`;