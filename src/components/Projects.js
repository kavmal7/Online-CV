import React, {useState} from 'react';
import { Container, Box, Image, Text, Link, Grid, Card, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrows';
import imgTree from "./extra_files/image(1).png";
import imgCV from "./extra_files/image(2).png";
import imgNo from "./extra_files/image(3).png";
import imgObd from "./extra_files/image(4).png";
import imgNlp from "./extra_files/image(5).png";
import imgGd from "./extra_files/image(7).png";
import imgLd from "./extra_files/image(8).png";

// Laying out data for the component
const projects = [
    {
      name: 'Online CV',
      description: 'An interactive online CV built with React and hosted on GitHub',
      githubUrl: 'https://github.com/kavmal7/Online-CV',
      image: imgCV
    },
    {
      name: 'Decision Tree Algorithm',
      description: 'Decision Tree Classifier implemented manually using the ID3 algorithm',
      githubUrl: 'https://github.com/kavmal7/decision-tree',
      image: imgTree
    },
    {
      name: 'MNIST Pipeline',
      description: 'Data analysis and model creation based on the MNIST dataset',
      githubUrl: 'https://github.com/kavmal7/MNIST-model',
      image: imgNo
    },
    {
      name: 'Manual Gradient Descent',
      description: 'Manual implementation of gradient descent in PyTorch',
      githubUrl: 'https://github.com/kavmal7/grad_descent',
      image: imgGd
    },
    {
        name: 'Object Localisation and Detection',
        description: 'Doing object localisation and object detection with convolutional neural networks',
        githubUrl: 'https://github.com/kavmal7/object-detection',
        image: imgObd
    },
    {
        name: 'Sequence Models',
        description: 'Doing various NLP tasks with CBOW, Attention models, and RNNs',
        githubUrl: 'https://github.com/kavmal7/Sequence-models',
        image: imgNlp
    },
    {
        name: 'Lane Detection',
        description: 'Given a video of a car driving, make a model highlighting the lanes',
        githubUrl: 'https://github.com/kavmal7/Lane-detection',
        image: imgLd
    }
];

// Defining the main component with data about the carousel's behaviour
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  // Regulate page count
  const chunkArray = (array, chunkSize) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const projectsPerPage = 6;
  const projectChunks = chunkArray(projects, projectsPerPage);

  return (
    <Box id="projects" position="relative" width="full" overflow="hidden" p={5} mx="auto" minHeight="100vh">
      <Container maxW="container.lg" textAlign="center">
        <Text fontSize="5xl" mb={6}>
          Projects
        </Text>
        <Slider {...settings}>
          {projectChunks.map((chunk, index) => (
            <Box key={index} px={10}>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {chunk.slice(0, 3).map((project, i) => (
                  <Card key={i} borderRadius="md" boxShadow="md" overflow="hidden">
                    <CardBody>
                      <Image src={project.image} objectFit="cover" width="100%" height="80px"/>
                      <Heading noOfLines={3} fontSize="xl" mt={4} mb={2}>{project.name}</Heading>
                      <Text noOfLines={3} fontSize="sm">{project.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button as={Link} href={project.githubUrl} colorScheme="blackAlpha" width="full" isExternal>
                        View on GitHub
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </Grid>
              <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
                {chunk.slice(3, 6).map((project, i) => (
                  <Card key={i} borderRadius="md" boxShadow="md" overflow="hidden">
                    <CardBody>
                      <Image src={project.image} objectFit="cover" width="100%" height="80px" />
                      <Heading fontSize="xl" mt={3} mb={2}>{project.name}</Heading>
                      <Text noOfLines={3} fontSize="sm">{project.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button as={Link} href={project.githubUrl} colorScheme="blackAlpha" width="full" isExternal>
                        View on GitHub
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </Grid>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};
  
export default Projects;