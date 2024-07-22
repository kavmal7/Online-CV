import React, {useState} from 'react';
import { Box, Container, Heading, HStack, IconButton, Text, SimpleGrid } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import ProjectCards from './ProjectCards';

const projects = [
    {
      name: 'Online CV',
      description: 'An interactive online CV built with React and hosted on GitHub',
      githubUrl: 'https://github.com/kavmal7/Online-CV',
      image: './extra_files/18184.jpg'
    },
    {
      name: 'Decision Tree Algorithm',
      description: 'Decision Tree Classifier implemented manually using the ID3 algorithm',
      githubUrl: 'https://github.com/kavmal7/decision-tree',
      image: './extra_files/decision_tree.png'
    },
    {
      name: 'MNIST Pipeline',
      description: 'Data analysis and model creation based on the MNIST dataset',
      githubUrl: 'https://github.com/kavmal7/decision-tree',
      image: './extra_files/mnist-pic.webp'
    },
    {
      name: 'Manual Gradient Descent',
      description: 'Manual implementation of gradient descent in PyTorch',
      githubUrl: 'https://github.com/kavmal7/grad_descent',
      image: './extra_files/gradient_descent.svg.png'
    },
    {
        name: 'Object Localisation and Detection',
        description: 'Doing object localisation and object detection with convolutional neural networks',
        githubUrl: 'https://github.com/kavmal7/object-detection',
        image: './extra_files/obd.png'
    },
    {
        name: 'Sequence Models',
        description: 'Doing various NLP tasks with CBOW, Attention models, and RNNs',
        githubUrl: 'https://github.com/kavmal7/Sequence-models',
        image: './extra_files/nlp.png'
    },
    {
        name: 'Lane Detection',
        description: 'Given a video of a car driving, make a model highlighting the lanes',
        githubUrl: 'https://github.com/kavmal7/Lane-detection',
        image: './extra_files/laned.png'
    }
];

const Projects = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const paginatedProjects = projects.slice(
    pageIndex * projectsPerPage,
    (pageIndex + 1) * projectsPerPage
  );

  return (
    <Box id="projects" py={8}>
      <Container maxW="container.md" textAlign="center">
        <Text fontSize="5xl" mb={6}>
          Projects
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} mb={6}>
          {paginatedProjects.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </SimpleGrid>
        <HStack justify="center" mt={4}>
          <IconButton
            icon={<ArrowBackIcon/>}
            onClick={handlePrevPage}
            isDisabled={pageIndex === 0}
            aria-label="Previous page"
          />
          <IconButton
            icon={<ArrowForwardIcon/>}
            onClick={handleNextPage}
            isDisabled={pageIndex === totalPages - 1}
            aria-label="Next page"
          />
        </HStack>
      </Container>
    </Box>
  );
};
  
export default Projects;