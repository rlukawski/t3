import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Text, Heading, HStack, Grid, GridItem, Box } from "@chakra-ui/react";
import { HiBars3 } from "react-icons/hi2";


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Grid templateAreas={`"header header"
                           "body sidebar"`}
      gridTemplateRows={'1fr 1fr'}
      gridTemplateColumns={'8fr 4fr'}
      gap="2">
      <GridItem area='header' bgColor="lightgreen">
        <HStack justifyContent='space-between'>
          <HiBars3 size="1.5em" />
          <Heading>This is Header</Heading>
          <Text>3</Text>
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
