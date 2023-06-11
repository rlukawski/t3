import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Text, Heading, HStack, Grid, GridItem, Box, Button, VStack, Input, FormControl, FormLabel, Select, Image, Spacer } from "@chakra-ui/react";
import { HiBars3 } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { ArticleItem } from "~/components/ArticleItem";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Grid templateAreas={`"header header"
                           "body sidebar"`}
      gridTemplateRows={'80px 1fr'}
      gridTemplateColumns={'8fr 4fr'}
      h='100vh'
      gap="1">
      <GridItem area='header' borderBottomWidth={1}>
        <HStack justifyContent='space-between' p='3'>
          <HiBars3 size="1.5em" />
          <Heading fontFamily='assistant' fontWeight={100}>This is Header</Heading>
          <HStack columnGap="4">
            <BsBell size="1.5em" />
            <Box bgColor="gray.600" w="5" h="5" borderRadius="full"></Box>
            <Button variant="outline" colorScheme="gray" columnGap="2"><Text>Write</Text><AiOutlineEdit /></Button>
          </HStack>
        </HStack>
      </GridItem>
      <GridItem area='body' as='main' borderRightWidth={1} alignItems='center' display='flex' flexDirection={'column'}>
        <VStack p='4' rowGap='4' w='80%'>
          <HStack w='full'>
            <FormControl flexBasis='50%' display='flex' alignItems='center'><FormLabel><CiSearch size='1.5em' /></FormLabel><Input placeholder="Search" borderRadius={'full'} /></FormControl>
            <HStack flexBasis='50%' columnGap='2' justifyContent='flex-end'>
              <Text>Menu:</Text>
              <Button borderRadius='full'>Design0</Button>
              <Button borderRadius='full'>Design1</Button>
              <Button borderRadius='full'>Design2</Button>
              <Button borderRadius='full'>Design3</Button>
            </HStack>
          </HStack>
          <HStack w='full' justifyContent='space-between'>
            <Text>Articles</Text>
            <Box>
              <Select placeholder="Select option" defaultValue={'option1'} borderRadius='full'>
                <option value="option1">Option 1</option>
              </Select>
            </Box>
          </HStack>
        </VStack>
        <VStack>
          <ArticleItem />
          <Spacer />
          <ArticleItem />
          <Spacer />
          <ArticleItem />
        </VStack>
      </GridItem>
      <GridItem area='sidebar' as='aside'>
        <Text>Sidebar</Text>
      </GridItem>
    </Grid>
  );
}

export default Home;
