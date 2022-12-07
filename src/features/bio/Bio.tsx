import { useState } from "react";

import { NombresSimpsons, INFO_SIMPSONS } from "./constants";

import {
  Image,
  Container,
  H3,
  Parragraph,
  ContainerButton,
  Button,
} from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        activo={bioActiva.id === nombre}
      >
        {nombre}
      </Button>
    ));
  };

  return (
    <Container>
      <ContainerButton>{crearBotones()}</ContainerButton>
      <div>
        <div>
          <Image src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <H3>{bioActiva.nombre}</H3>
          <Parragraph>{bioActiva.descripcion}</Parragraph>
        </div>
      </div>
    </Container>
  );
};

export default Bio;
