import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Componets/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Componets/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


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
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
        </GridItem>
        
      </Show>
      <GridItem area="main">
        <HStack spacing={10} paddingLeft={3} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
