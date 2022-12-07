import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../test-utils";
import Cita from "../Cita";

describe("Cita", () => {
  test('renderizar No se encontro ninguna cita al iniciar la aplicacion"', () => {
    render(<Cita />);
    const message = screen.getByText(/No se encontro ninguna cita/i);
    expect(message).toBeInTheDocument();
  });

  test("renderizar boton obtener cita aleatoria", () => {
    render(<Cita />);
    const button = screen.getByRole("button", {
      name: /Obtener cita aleatoria/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("renderizar mensaje No se encontro ninguna cita", async () => {
    render(<Cita />);
    const button = screen.getByText(/Obtener cita aleatoria/i);
    await userEvent.click(button);
    expect(
      screen.queryByText("No se encontro ninguna cita")
    ).not.toBeInTheDocument();
  });

  test("renderizar boton Obtener cita en el input", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Bart");
    const button = screen.getByText(/Obtener cita/i);
    expect(button).toBeInTheDocument();
  });

  test("renderizar boton borrar", () => {
    render(<Cita />);
    const button = screen.getByRole("button", { name: /Borrar/i });
    expect(button).toBeInTheDocument();
  });

  test("renderizar mensaje cargando al hacer click en el boton", async () => {
    render(<Cita />);
    const button = screen.getByText("Obtener cita aleatoria");
    await userEvent.click(button);
    const message = screen.getByText(/Cargando/i);
    expect(message).toBeInTheDocument();
  });

  test("renderizar error al ingresar un numero", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "927");
    const button = screen.getByText(/Obtener cita/i);
    await userEvent.click(button);
    expect(
      await screen.findByText(/Por favor ingrese un nombre válido/i)
    ).toBeInTheDocument();
  });

  test("borrar nombre al dar click en borrar", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Homer");
    const button = screen.getByText(/Borrar/i);
    await userEvent.click(button);
    expect(screen.getByText(/Obtener cita aleatoria/i)).toBeInTheDocument();
  });
});
