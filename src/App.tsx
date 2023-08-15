import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";

function App() {
  // return <Button colorScheme='blue'>Button</Button>
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //This will be at 1024px
      }}
    >
      <GridItem area="nav">
        Nav
        
        <NavBar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">
        Aside
        <GenreList></GenreList>
        </GridItem>
        
      </Show>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
