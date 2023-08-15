import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

//Below we are mapping out
const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
