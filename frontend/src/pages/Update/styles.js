import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* border: 1px solid #d43; */
`;

export const BannerDiv = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  max-height: 300px;
  border-radius: 4px;
  mix-blend-mode: normal;
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 52px auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    input {
      margin-top: 20px;
      max-width: 940px;
      border-radius: 4px;
      border: 0;
      background-color: rgba(0, 0, 0, 0.2);
      height: 50px;
      color: rgba(255, 255, 255, 0.5);
      padding: 0 15px;
      font-size: 16px;
    }

    textarea {
      margin-top: 20px;
      max-width: 940px;
      border-radius: 4px;
      border: 0;
      background-color: rgba(0, 0, 0, 0.2);
      height: 200px;
      color: rgba(255, 255, 255, 0.5);
      padding: 15px 15px;
      font-size: 16px;
    }

    > button {
      display: flex;
      align-self: flex-end;
      margin: 20px 0 0;
      height: 42px;
      width: 180px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      text-align: right;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
