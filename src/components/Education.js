import React from 'react';
import { Box, Container, Heading, Image, Text, VStack, HStack, Link, Divider } from '@chakra-ui/react';

const academicExperience = [
    {
        institution: 'University of Bergen',
        degree: 'B.Sc. Data Science',
        year: '2021 - 2024',
        description: 'Completed various courses related to CS but with a focus on Data Science.',
        institutionUrl: 'https://www.uib.no/',
        pdfUrl: './extra_files/Results_from_Diploma_registry-1.pdf',
        imgUrl: ''
    },
    {
        institution: 'International Baccalaureate',
        degree: 'IB Diploma',
        year: '2017 - 2019 (excluding retakes)',
        description: 'Completed the IB Diploma in 2019, but retook some subjects to improve my grade.',
        institutionUrl: 'https://ibo.org/',
        pdfUrl: '',
        imgUrl: './extra_files/ib.png'
    },
    {
        institution: 'International School of Bergen',
        degree: 'PYP and MYP completion',
        year: '2009 - 2017',
        description: 'Completed IBO\'s Primary Years Programme (PYP) and the Middle Years Programme (MYP) at this institution.',
        institutionUrl: 'https://www.isbergen.no/',
        pdfUrl: '',
        imgUrl: ''
    }
]

const Education = () => (
    <Box id="education" py={8} bg="white">
      <Container maxW="container.md" textAlign="center">
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
                  <Link href={item.website} color="blue.500" isExternal mt={2}>Visit Website</Link>
                  {item.pdfUrl && (
                    <Link href={item.pdfUrl} color="blue.500" isExternal mt={2} ml={4}>
                      View Transcript (PDF)
                    </Link>
                  )}
                  {item.imgUrl && (
                    <Link href={item.imgUrl} color="blue.500" isExternal mt={2} ml={4}>
                      View Transcript (Image)
                    </Link>
                  )}
                </Box>
              </HStack>
              {index < academicExperience.length - 1 && <Divider my={6}/>}
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
);

export default Education;