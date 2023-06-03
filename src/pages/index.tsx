import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Text, Heading, HStack, Grid, GridItem, Box, Button } from "@chakra-ui/react";
import { HiBars3 } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Grid templateAreas={`"header header"
                           "body sidebar"`}
      gridTemplateRows={'1fr 1fr'}
      gridTemplateColumns={'8fr 4fr'}
      gap="2">
      <GridItem area='header' bgColor="lightgreen">
        <HStack justifyContent='space-between' p='3'>
          <HiBars3 size="1.5em" />
          <Heading>This is Header</Heading>
          <HStack columnGap="4">
            <BsBell size="1.5em" />
            <Box bgColor="gray.600" w="5" h="5" borderRadius="full"></Box>
            <Button variant="outline" colorScheme="dark" columnGap="2"><Text>Write</Text><AiOutlineEdit /></Button>
          </HStack>
        </HStack>
      </GridItem>
      <GridItem area='body' bgColor="lightblue">
        <Text>Hello from the world of Next.js</Text>
      </GridItem>
      <GridItem area='sidebar' bgColor="yellow">
        <Text>Sidebar</Text>
      </GridItem>
    </Grid>
  );
}

export default Home;
