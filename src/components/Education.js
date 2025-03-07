import React from 'react';
import { Box, Container, Text, VStack, HStack, Link, Divider } from '@chakra-ui/react';

// Laying out data for the component
const academicExperience = [
    {
        institution: 'University of Bergen',
        degree: 'B.Sc. Data Science',
        year: '2021 - 2024',
        description: 'Completed various courses related to CS but with a focus on Data Science. During this time, I also did extracurriculars such as joining the CS group, where I occasionally went to for assistance or assisting others, apart from special events.',
        institutionUrl: 'https://www.uib.no/'
    },
    {
        institution: 'International Baccalaureate (Bergen Katedralskole)',
        degree: 'IB Diploma',
        year: '2017 - 2019 (excluding retakes)',
        description: 'Completed the IB Diploma in 2019, but retook some subjects to improve my grade. The lessons I learned here were invaluable for my development.',
        institutionUrl: 'https://ibo.org/'
    },
    {
        institution: 'International School of Bergen',
        degree: 'PYP and MYP completion',
        year: '2009 - 2017',
        description: 'Completed IBO\'s Primary Years Programme (PYP) and the Middle Years Programme (MYP) at this institution. The main use of English here really honed my English capabilities.',
        institutionUrl: 'https://www.isbergen.no/'
    }
]

// Defining the component containing a column listing each institution and information
const Education = () => (
    <Box id="education" py={8} minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" width="100%">
        <Container maxW="container.md" textAlign="center" alignItems="center">
        <Text fontSize="5xl" mb={6}>
          Education
        </Text>
        <VStack spacing={8} align="stretch">
          {academicExperience.map((item, index) => (
            <Box key={index} mb={8}>
              <HStack spacing={6} align="start">
                <Box textAlign="left">
                  <Text fontWeight="bold" fontSize="lg">{item.degree}</Text>
                  <Text fontSize="md" color="gray.600">{item.institution}</Text>
                  <Text fontSize="sm" color="gray.500">{item.year}</Text>
                  <Text fontSize="sm" mt={2}>{item.description}</Text>
                  <Link href={item.institutionUrl} color="blue.500" isExternal mt={2}>Visit Website</Link>
                </Box>
              </HStack>
              {index < academicExperience.length - 1 && <Divider my={6}/>}
            </Box>
          ))}
        </VStack>
        <Text fontSize="md" color="gray.500" mt={10}>
          Grade Transcripts are available upon request.
        </Text>
      </Container>
    </Box>
);

export default Education;