import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrows';
import SectionHeading from './SectionHeading';
import decisionTreeImage from './extra_files/decision-tree.jpg';
import onlineCvImage from './extra_files/online-cv.jpg';
import mnistImage from './extra_files/mnist.png';
import objectDetectionImage from './extra_files/object-detection.png';
import sequenceModelsImage from './extra_files/sequence-models.jpg';
import gradientDescentImage from './extra_files/gradient-descent.png';
import laneDetectionImage from './extra_files/lane-detection.png';
import modelSoupingImage from './extra_files/model-souping.png';
import muleImage from './extra_files/mule.avif';

const projects = [
  {
    name: 'Online CV',
    description: 'An interactive online CV (what you are reading now) built with React and hosted on GitHub.',
    githubUrl: 'https://github.com/kavmal7/Online-CV',
    image: onlineCvImage,
  },
  {
    name: 'Decision Tree & Random Forest Algorithm',
    description: 'A decision tree classifier implemented manually using the ID3 algorithm, then expanded into a random forest classifier.',
    githubUrl: 'https://github.com/kavmal7/decision-tree',
    image: decisionTreeImage,
  },
  {
    name: 'MNIST Pipeline',
    description: 'Data analysis and model creation based on the MNIST dataset.',
    githubUrl: 'https://github.com/kavmal7/MNIST-model',
    image: mnistImage,
  },
  {
    name: 'Manual Gradient Descent',
    description: 'A manual implementation of gradient descent in PyTorch.',
    githubUrl: 'https://github.com/kavmal7/grad_descent',
    image: gradientDescentImage,
  },
  {
    name: 'Object Localisation and Detection',
    description: 'Object localisation and detection using convolutional neural networks.',
    githubUrl: 'https://github.com/kavmal7/object-detection',
    image: objectDetectionImage,
  },
  {
    name: 'Sequence Models',
    description: 'Natural language processing tasks using CBOW, attention models, and recurrent neural networks.',
    githubUrl: 'https://github.com/kavmal7/Sequence-models',
    image: sequenceModelsImage,
  },
  {
    name: 'Lane Detection',
    description: 'A model that highlights road lanes in a video captured from a moving car.',
    githubUrl: 'https://github.com/kavmal7/Lane-detection',
    image: laneDetectionImage,
  },
  {
    name: 'Open-Ended Methods for Model Souping',
    description: 'A group project investigating whether open-ended methods such as MAP-Elites can improve model-souping baselines.',
    githubUrl: 'https://github.com/kavmal7/COMP0258-project',
    image: modelSoupingImage,
  },
  {
    name: 'MuLE: Multilingual Language Equilibrium',
    description: 'A group project investigating whether Direct Preference Optimisation can achieve multilingual reasoning alignment at a lower cost than GRPO-based approaches.',
    githubUrl: 'https://github.com/Rauljo/MuLE',
    image: muleImage,
  },
];

const sliderSettings = {
  accessibility: true,
  arrows: true,
  dots: true,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToScroll: 3,
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToScroll: 2, slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToScroll: 1, slidesToShow: 1 },
    },
  ],
};

const Projects = () => (
  <Box position="relative" width="full" py={{ base: 8, md: 12 }}>
    <Container maxW="container.xl" px={{ base: 8, md: 12 }}>
      <SectionHeading>Projects</SectionHeading>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <Box key={project.githubUrl} px={{ base: 2, md: 3 }} py={2} height="full">
            <Card borderRadius="md" boxShadow="md" overflow="hidden" height="full">
              <CardBody>
                <Image
                  src={project.image}
                  alt={`${project.name} project thumbnail`}
                  objectFit="cover"
                  width="full"
                  height="160px"
                  loading="lazy"
                />
                <Heading as="h3" noOfLines={2} fontSize="xl" mt={4} mb={2}>
                  {project.name}
                </Heading>
                <Text fontSize="sm">{project.description}</Text>
              </CardBody>
              <CardFooter pt={0}>
                <Button
                  as={Link}
                  href={project.githubUrl}
                  colorScheme="blackAlpha"
                  width="full"
                  isExternal
                >
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  </Box>
);

export default Projects;
