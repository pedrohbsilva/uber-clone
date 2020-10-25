import React from 'react';
import { NumberToReal } from '../../utils/NumberToReal';

import uberX from '../../assets/uberx.png';

import styles, { 
  Container, 
  Title, 
  Description, 
  ImageCar,
  RequestButton, 
  RequestButtonText 
} from './styles';

interface DetailsProps {
  distance: number;
}

const Details: React.FC<DetailsProps> = ({ distance }) => {

  const cost = distance * 2.25;

  return (
    <Container style={styles.container}>
      <Title>Popular</Title>
      <Description>Viagens baratas para o dia a dia</Description>

      <ImageCar source={uberX} />
      <Title>UberX</Title>
      <Description>{NumberToReal(cost)}</Description>

      <RequestButton onPress={() => { alert(`Parabéns você efetuou a solicitação da corrida no valor de ${NumberToReal(cost)}`) }}>
        <RequestButtonText>
          Solicitar UberX
        </RequestButtonText>
      </RequestButton>
    </Container>
  )
}

export default Details;