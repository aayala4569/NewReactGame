import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // return <Button colorScheme='blue'>Button</Button>
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //This will be at 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px'}} 
    >
      <GridItem area="nav">
        <NavBar/>

      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX='5px'>
        Aside
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </GridItem>
        
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
