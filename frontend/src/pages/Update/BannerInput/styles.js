import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 300px;

  label {
    cursor: pointer;

    /* max-width: 100%; */
    /* height: 300px; */
    color: rgba(255, 255, 255, 0.4);

    &:hover {
      opacity: 0.5;
    }

    img {
      max-width: 100%;
      max-height: 300px;
    }

    input {
      display: none;
    }
  }
`;
