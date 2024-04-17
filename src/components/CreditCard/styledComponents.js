import styled from 'styled-components'

export const CreditMainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

export const CreditCardContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const CreditPaymentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
  text-decoration: underline #ffd773;
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 50%;
  border-radius: 10px;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CardNumber = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
  padding-top: 10px;
`
export const CardHolderName = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
  font-family: 'Roboto';
`
export const PaymentCardContainer = styled.div`
  height: 300px;
  width: 80%;
  box-shadow: 2px 2px 2px 2px #d3d9e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PaymentHeading = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #344e7a;
  font-family: 'Roboto';
`
export const InputContainer = styled.input`
  height: 40px;
  border-radius: 3px;
  width: 80%;
  border: 1px solid #c3cad9;
  outline: none;
  margin: 10px;
  font-size: 13px;
  font-weight: 300;
  padding-left: 10px;
  font-family: 'Roboto';
`
