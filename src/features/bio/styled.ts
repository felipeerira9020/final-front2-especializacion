import styled, { css } from "styled-components";

export interface IPropsButton {
  activo: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;

export const Parragraph = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Button = styled.button<IPropsButton>`
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.4rem;
  border-radius: 0.3125rem;
  box-shadow: 0rem 0rem 0.3125rem 0rem rgba(0, 0, 0, 0.75);
  border: 0.0625rem solid darkgray;
  padding: 1rem;
  margin: 1rem;

  ${({ activo }: IPropsButton) =>
    activo &&
    css`
      background-color: var(--color-yellow);
      color: var(--color-smoke);
      text-shadow: "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,-2px 0px 0 #000000, 0px -2px 0 #000000";
      &:hover {
        cursor: pointer;
      }
    `}
`;
