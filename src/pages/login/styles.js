import styled from 'styled-components';

import Image from '../../assets/images/fundo.jpg';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.8) 80%),
    url(${Image});
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  background-position: top;
`;

export const Content = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;

  img {
    width: 72px;
    height: 72px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  input {
    margin-top: 10px;
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 15px;
    color: #999999;
    border-radius: 5px;
  }

  button {
    margin-top: 20px;
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background: #f62c2c;
    border: 0;
    font-size: 15px;
    color: #fff;
    border-radius: 5px;
    font-weight: bold;
  }
`;
