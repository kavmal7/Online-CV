import React from 'react';
import { Box, Container, Text, VStack, HStack, Link, Divider } from '@chakra-ui/react';

// Laying out data for the component
const experiences = [
    {
        company: 'Indisk Emporium AS',
        role: 'Retail worker',
        year: '2017 - Present',
        details: 'My responsibilities here involved a large degree of customer management which consisted of communicating with the customers and assisting them with any issue. The role helped me vastly in developing communicating skills, making me open and approachable.',
        companyUrl: 'https://www.indiske.com/'
    },
    {
        company: 'Indisk Emporium AS',
        role: 'Web developer',
        year: '2020 - Present',
        details: 'My responsibilities here consist of assisting in development of the company\'s website and keeping up with all the new features and updates of Wix, a cloud-based web development service. I have been able to apply my knowledge of HTML, JavaScript, and SQL variants in this realm, along with other mainstream programming languages.',
        companyUrl: 'https://www.indiske.com/'
    }
]

// Defining the main component, mostly similar to the Education component
const WorkExperience = () => (
  <Box id="work-experience" py={8} minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" width="100%">
    <Container maxW="container.md" textAlign="center" alignItems="center">
      <Text fontSize="5xl" mb={6}>
        Work Experience
      </Text>
      <VStack spacing={8} align="stretch">
        {experiences.map((item, index) => (
          <Box key={index} mb={8}>
            <HStack spacing={6} align="start">
            <Box textAlign="left">
                <Text fontWeight="bold" fontSize="lg">{item.role}</Text>
                <Text fontSize="md" color="gray.600">{item.company}</Text>
                <Text fontSize="sm" color="gray.500">{item.year}</Text>
                <Text fontSize="sm" mt={2}>{item.details}</Text>
                <Link href={item.companyUrl} color="blue.500" isExternal mt={2}>Visit Website</Link>
              </Box>
            </HStack>
            {index < experiences.length - 1 && <Divider my={6}/>}
          </Box>
        ))}
      </VStack>
    </Container>
  </Box>
);

export default WorkExperience;