import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background: #0b2031;
  padding: 24px 250px 24px;
`;

export const Brand = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }

  name {
    flex: 1;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Databox = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Datatext = styled.div`
  flex-direction: column;
  display: flex;
  text-align: right;

  user {
    flex: 1;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Logout = styled.button`
  padding-top: 1px;
  flex: 1;
  font-size: 14px;
  color: #fff;
  background-color: transparent;
  border: 0;
  font-weight: normal;
  opacity: 0.6;
  text-align: right;
`;

export const Divider = styled.div`
  width: 1px;
  height: 36px;
  margin: 20px;
  background: #fff;
  opacity: 0.6;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f62c2c;

  img {
    width: 20px;
    height: 20px;
    filter: invert(100%) sepia(71%) saturate(202%) hue-rotate(97deg) brightness(118%) contrast(101%);
  }
`;
