import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 52px;
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 0px auto;

  .meetupHeader {
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    div {
      display: flex;
    }

    .editButton {
      display: flex;
      padding: 0 20px;
      margin: 0 15px;
      width: 116px;
      height: 42px;
      background: #4dbaf9;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      justify-content: space-around;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#4DBAF9')};
      }
    }

    .cancelButton {
      display: flex;
      text-align: right;
      padding: 0 20px;
      width: 138px;
      height: 42px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      justify-content: space-around;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }

  .descriptionDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    div#backgroundBanner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 100%;
      border-radius: 4px;
      margin-top: 20px;
      background: #000;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  strong#description {
    font-size: 18px;
    font-weight: normal;
    line-height: 32px;
    color: #fff;
  }
  div#dateLocation {
    margin-top: 30px;
    max-width: 940px;

    span {
      align-items: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      margin-left: 30px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
