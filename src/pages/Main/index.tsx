import React from 'react';
import Map from '../../components/Map';
import { Feather } from '@expo/vector-icons';

import {Container, TextMain} from './styles';

const Main: React.FC = () => {
  
  if (process.env.API_GOOGLE_MAPS) {
    return (
      <Map />
    );
  } else {
    return (
      <Container>
        <Feather name="alert-circle" size={35} />
        <TextMain>
          Para poder exibir o sistema, é necessário que defina uma chave de API válida do Google Maps.
        </TextMain>
      </Container>
    )
  }

}

export default Main;