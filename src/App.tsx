import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  // return <Button colorScheme='blue'>Button</Button>
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //This will be at 1024px
      }}
    >
      <GridItem area="nav" bg="orange">
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg="gold">
        Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
