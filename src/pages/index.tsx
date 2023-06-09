/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Text, Heading, HStack, Grid, GridItem, Box, Button, VStack, Input, FormControl, FormLabel, Select, Image } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { HiBars3 } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { ArticleItem } from "~/components/ArticleItem";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData, status } = useSession();

  console.log({ sessionData, status })

  const onClose = () => setIsOpen(false);;
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
          {status === 'authenticated' ?
            <HStack columnGap="4">
              <BsBell size="1.5em" />
              <Box bgColor="gray.600" w="5" h="5" borderRadius="full"></Box>
              <Button variant="outline" colorScheme="gray" columnGap="2" onClick={() => setIsOpen(true)}><Text>Write</Text><AiOutlineEdit /></Button>
              <Button onClick={() => signOut()}>SignOut</Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum harum nesciunt, expedita quasi architecto quia excepturi fuga, quos asperiores, saepe voluptas reiciendis ipsum provident voluptatem laborum! Blanditiis, non nostrum?
                  
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </HStack> : <Button variant="outline" onClick={() => signIn()} colorScheme="gray" columnGap="2">Sign in</Button>}
        </HStack>
      </GridItem >
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
          {Array(5).fill('').map((_, i) => <ArticleItem key={i} />)}
        </VStack>
      </GridItem>
      <GridItem area='sidebar' as='aside'>
        <VStack p='6'>
          <Box w='full' h='200px' borderRadius='xl' bgColor='gray.200' bgGradient='linear(to-br, gray.300, gray.200, gray.300)' p='6'>
            <HStack w='full' h='full' alignItems='center'>
              <VStack alignItems='flex-start' flexGrow='1'>
                <Heading size='md' noOfLines={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Heading>
                <Text noOfLines={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem pariatur, qui aperiam modi necessitatibus quos, asperiores error impedit corporis numquam cumque dolorum odio obcaecati consectetur, blanditiis ad sed minima fugiat?
                </Text>
                <Button>Button</Button>
              </VStack>
              <Image h='full' alt='alt' src='https://placehold.co/400'></Image>
            </HStack>
          </Box>
        </VStack>
      </GridItem>
    </Grid >
  );
}

export default Home;
