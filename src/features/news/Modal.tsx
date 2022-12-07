import { CloseButton as Close } from "../../assets";
import { IPropsModal } from "./types";

import {
  ContenedorModal,
  TarjetaModal,
  CloseButton,
  ImagenModal,
  TituloModal,
  DescripcionModal,
  CotenedorTexto,
} from "./styled";

const Modal = ({
  imagen,
  titulo,
  descripcion,
  altImagen,
  setModal,
  children,
}: IPropsModal) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={imagen} alt={altImagen} />
        <CotenedorTexto>
          <TituloModal>{titulo}</TituloModal>
          <DescripcionModal>{descripcion}</DescripcionModal>
          {children}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default Modal;
