import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }
  button {
    width: 71px;
    height: 42px;
    background: #d44059;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
`;
