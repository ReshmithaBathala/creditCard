import {useState} from 'react'
import {
  CreditMainContainer,
  CreditCardContainer,
  CreditPaymentContainer,
  Heading,
  CardContainer,
  CardNumber,
  CardHolderName,
  PaymentCardContainer,
  PaymentHeading,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeHolder = event => {
    setCardHolder(event.target.value)
  }
  return (
    <CreditMainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardHolderName>{cardHolder.toUpperCase()}</CardHolderName>
        </CardContainer>
      </CreditCardContainer>
      <CreditPaymentContainer>
        <PaymentCardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputContainer
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={cardNumber}
          />
          <InputContainer
            placeholder="Cardholder Name"
            onChange={onChangeHolder}
            value={cardHolder}
          />
        </PaymentCardContainer>
      </CreditPaymentContainer>
    </CreditMainContainer>
  )
}

export default CreditCard
