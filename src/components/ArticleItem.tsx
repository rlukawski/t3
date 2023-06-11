import React from 'react';
import { Text, Heading, HStack, Grid, GridItem, Box, Button, VStack, Input, FormControl, FormLabel, Select, Image } from "@chakra-ui/react";
import Moment from 'react-moment';

export const ArticleItem = () => {
    return <VStack p='4' w='full' alignItems='flex-start'>
        <VStack>
            <HStack columnGap='4'><Box backgroundColor='gray' borderRadius='full' w='10' h='10'></Box><VStack alignItems='flex-start'><HStack><Text>Rafał Łukawski</Text><Moment format='DD MMMM, YYYY HH:mm' /></HStack><HStack><Text>rafal@lukawski.pl</Text></HStack></VStack></HStack>
        </VStack>

        <Heading>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Heading>
        <Grid templateColumns='3fr 1fr' columnGap='4' rowGap='4' w='full'>
            <GridItem><Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ducimus in sint nobis dicta natus illum, commodi dolorem ullam facilis, eaque, voluptas voluptate inventore repellat? Perspiciatis fugiat cum ipsa cumque?
                Vel, libero. Maxime temporibus ipsum molestias voluptates corrupti sapiente odit at iusto beatae aperiam, sunt qui sequi quasi repellendus unde ab sit voluptate quam vel, veniam atque, minima itaque autem.
                Quidem exercitationem voluptatum doloribus reprehenderit aspernatur dignissimos aliquam voluptates vitae ratione debitis? Ullam quaerat nostrum repellendus perferendis aut quod, iusto porro magni voluptates harum similique rem. Aliquam provident facilis neque.
                Pariatur ipsam quis iusto unde, mollitia sunt vero alias, magnam totam dicta, assumenda repellat? Nesciunt dolor odit distinctio expedita totam debitis, molestias assumenda, quo soluta laboriosam corporis voluptates perferendis maiores?</Text>
            </GridItem>
            <GridItem><Image w='full' h='full' alt='alt' src='https://placehold.co/400'></Image></GridItem>
        </Grid>
        <HStack><Button borderRadius='full'>Read More</Button><Button borderRadius='full'>Share</Button></HStack>
    </VStack>
}