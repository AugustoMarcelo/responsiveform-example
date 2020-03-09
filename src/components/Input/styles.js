import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #444;
    font-size: 13px;
  }

  input {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    padding: 0 10px;
    color: #444;
    width: 100%;
    transition: border 0.5s;

    &:focus {
      border-color: #7159c1;
    }
  }
`;