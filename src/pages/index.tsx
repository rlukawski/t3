import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { VStack, Container, Text, Heading, HStack, Grid, GridItem } from "@chakra-ui/react";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Grid templateAreas={`"header header"
                           "body sidebar"`}
      gridTemplateRows={'1fr 1fr'}
      gridTemplateColumns={'8fr 4fr'}
      gap="2">
      <GridItem area='header' bgColor="lightgreen">
        <Heading>This is Header</Heading>
      </GridItem>
      <GridItem area='body' bgColor="lightblue">
        <Text>Hello from the world of Next.js</Text>
      </GridItem>
      <GridItem area='sidebar' bgColor="yellow">
        <Text>Sidebar</Text>
      </GridItem>
    </Grid>
  );
};

export default Home;
