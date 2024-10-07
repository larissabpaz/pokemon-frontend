import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export default function Home() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pokemon/captured').then((response) => {
      setCapturedPokemons(response.data);
    });
  }, []);

  const findRandomPokemon = () => {
    axios.get('http://localhost:3000/pokemon/random').then((response) => {
      setRandomPokemon(response.data);
    });
  };

  const capturePokemon = () => {
    if (randomPokemon) {
      axios.post('http://localhost:3000/pokemon/capture', randomPokemon).then(() => {
        setCapturedPokemons([...capturedPokemons, randomPokemon]);
        setRandomPokemon(null);
      });
    }
  };

  const releasePokemon = (id: number) => {
    axios.delete(`http://localhost:3000/pokemon/release/${id}`).then(() => {
      setCapturedPokemons(capturedPokemons.filter((p) => p.id !== id));
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Pokémons Capturados
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List>
            {capturedPokemons.map((pokemon) => (
              <ListItem key={pokemon.id}>
                <ListItemText primary={pokemon.name} />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => releasePokemon(pokemon.id)}
                >
                  Soltar
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={findRandomPokemon}
            sx={{ mb: 2 }}
          >
            Encontrar Pokémon Aleatório
          </Button>

          {randomPokemon && (
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {randomPokemon.name}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  onClick={capturePokemon}
                  sx={{ mt: 2 }}
                >
                  Capturar
                </Button>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
