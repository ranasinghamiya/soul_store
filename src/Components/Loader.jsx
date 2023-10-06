import { Box, Center,Stack, Text } from '@chakra-ui/react';
import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
const Loader = () => {
  return (
    <Center>
        <Stack direction='column' spacing={4}>
        <Box marginLeft={"60px"}><FadeLoader  size={80} color="#E11B23" /></Box>
  
   <Text transition={"ease-in-out"} color={"#E11B23"}>Authentication Your Data....</Text>
</Stack>
    </Center>
  );
}

export default Loader;