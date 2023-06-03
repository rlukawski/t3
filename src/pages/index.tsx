import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { VStack, Container, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Container>
      <VStack w="full"><Text color="black">Hello from the world of Next.js</Text></VStack>
    </Container>
  );
};

export default Home;
