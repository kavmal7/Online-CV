import React from 'react';
import { Card, CardBody, Image, Heading, Text, Link, Stack, Button, Divider, CardFooter } from '@chakra-ui/react';

const ProjectCards = ({ image, name, description, githubUrl }) => (
    <Card maxW="md" align="center">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg"/>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text size="sm">{description}</Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link href={githubUrl} isExternal>
            <Button variant="solid" colorScheme='blackAlpha'>View on GitHub</Button>
        </Link>
      </CardFooter>
    </Card>
);
  

export default ProjectCards;
