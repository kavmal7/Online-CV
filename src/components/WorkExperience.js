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
        role: 'Developer',
        year: '2021 - Present',
        details: 'My responsibilities here consist of assisting in a lot of the computational side of the business. This includes the company\'s website and keeping up with all the new features and updates of Wix, a cloud-based web development service. Besides this, I also help manage the database of the products and services of the business, as well as data gathering and analysis (Data Science) for future planning.',
        companyUrl: 'https://www.indiske.com/'
    },
    {
        company: 'Digiscreens Project',
        role: 'Developer',
        year: '2023',
        details: 'This was a collaborative group project/internship with the client on how the streaming of films and TV series contributes to the transformation of social and cultural dynamics in Europe. The project examines film and TV distribution, reception, and representation in the light of the last decades\' demands for increased diversity and inclusivity on screen. My role mostly involved code-related tasks with the data, which included the creation of plots, functions (along with tests), and a website to display this information. I also took part in communicating with various streaming providers about data requests early on.',
        companyUrl: 'https://www.uib.no/en/digiscreens'
    },
    {
      company: 'Vogue International (export company based in India)',
      role: 'Junior developer (unpaid internship)',
      year: '2023 - Present',
      details: 'I have been working with people at this company not only to organise importing of goods to my current company, but have also assisted in optimising exporting software and document management.',
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