import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../index';

describe('Home', () => {
  it('deve renderizar a lista de Pokémons capturados', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Pokémons Capturados/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('deve encontrar e capturar um Pokémon', async () => {
    render(<Home />);

    // Simular o botão de encontrar Pokémon
    const findButton = screen.getByRole('button', { name: /Encontrar Pokémon Aleatório/i });
    fireEvent.click(findButton);

    // Verifica se o Pokémon foi encontrado (substitua por mock da API)
    const randomPokemon = await screen.findByText(/capturar/i);
    expect(randomPokemon).toBeInTheDocument();

    // Simular o botão de capturar Pokémon
    const captureButton = screen.getByRole('button', { name: /Capturar/i });
    fireEvent.click(captureButton);

    // Verificar se o Pokémon capturado foi adicionado à lista (mock da lista)
    const capturedPokemon = await screen.findByText(/Soltar/i);
    expect(capturedPokemon).toBeInTheDocument();
  });

  it('deve soltar um Pokémon capturado', async () => {
    render(<Home />);

    // Simular a presença de um Pokémon capturado 
    const releaseButton = screen.getByRole('button', { name: /Soltar/i });
    fireEvent.click(releaseButton);

    // Verificar se o Pokémon foi removido da lista
    expect(screen.queryByText(/Soltar/i)).toBeNull();
  });
});
