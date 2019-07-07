import styled from 'styled-components';

export const Body = styled.div`
  padding-top: 110px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Collumn = styled.div`
  width: 700px;
`;

export const Title = styled.div`
  flex: 1;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
`;

export const Box = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
`;

export const Order = styled.div`
  flex-direction: column;
  display: flex;
  color: #0b2031;
  margin-bottom: 10px;

  client {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 5px;
    id {
      font-weight: bold;
    }
  }

  hour {
    font-size: 11px;
    font-weight: normal;
    margin-bottom: 5px;
  }

  price {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 5px 0px 15px 0px;
  background: #e9e9e9;
`;

export const Notes = styled.div`
  color: #706e7b;
  font-size: 14px;
  rge {
    font-weight: bold;
  }
  obs {
    font-weight: normal;
  }
`;

export const Items = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: xl-start;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  background: #fff;
  height: 80px;
  width: 30%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
  flex-direction: row;
  display: flex;
  margin: 0px 10px 10px 0px;

  img {
    height: 60px;
  }
  text {
    font-weight: normal;
    flex-direction: column;
    padding-left: 10px;
    display: flex;
    product {
      color: #0b2031;
      font-size: 13px;
      margin-bottom: 5px;
    }
    size {
      color: #706e7b;
      font-size: 11px;
    }
  }
`;
