import React from 'react';
import { Box, Container, Text, VStack, Link, Divider, SimpleGrid } from '@chakra-ui/react';

// Laying out data for the component
const certificates = [
    {
        name: 'Learn Java Course',
        institution: 'Codecademy',
        skills: 'Java',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/d3f89367b558583e361640f778191345'
    },
    {
        name: 'Learn Python 3 Course',
        institution: 'Codecademy',
        skills: 'Python',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/6c152bd262967f8c941c9707ed636bda'
    },
    {
        name: 'Learn C Course',
        institution: 'Codecademy',
        skills: 'C',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/8c3029c4a6e5894e74da756e3a7c0ae3'
    },
    {
        name: 'Learn SQL Course',
        institution: 'Codecademy',
        skills: 'SQL',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/042a4e5884e3eb6ea1f2a12be6abb851'
    },
    {
        name: 'Learn JavaScript Course',
        institution: 'Codecademy',
        skills: 'JavaScript',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/705dcb15de0da4dd9d9fc4f3274b430e'
    },
    {
        name: 'Learn Intermediate JavaScript Course',
        institution: 'Codecademy',
        skills: 'JavaScript',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/512386fdc7f6c934f98b01e6afa8285a'
    },
    {
        name: 'Data and Programming Foundations for AI Skill Path',
        institution: 'Codecademy',
        skills: 'Artificial Intelligence',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/5701108f64cd4a02981c161085ccc50e'
    },
    {
        name: 'Build Chatbots with Python Skill Path',
        institution: 'Codecademy',
        skills: 'Artificial Intelligence, Python',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/5e15fa478b1c550011ec7046'
    },
    {
        name: 'Language Parsing Course',
        institution: 'Codecademy',
        skills: 'Natural Language Processing',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/3e67b57aafb07ef7221c3051a23ff2ca'
    },
    {
        name: 'Introduction to Responsible AI',
        institution: 'Google',
        skills: 'Artificial Intelligence, Ethics',
        certificateUrl: 'https://www.cloudskillsboost.google/public_profiles/9193f50b-2699-492e-9d8b-26a6a9c0782d/badges/10876991'
    },
    {
        name: 'Introduction to Image Generation',
        institution: 'Google',
        skills: 'Artificial Intelligence, Image Processing & Generation',
        certificateUrl: 'https://www.cloudskillsboost.google/public_profiles/9193f50b-2699-492e-9d8b-26a6a9c0782d/badges/11589220'
    }
]

// Defining the component in a two-column grid format
const Certifications = () => (
    <Box id="certifications" py={8} minHeight="100vh">
      <Container maxW="container.md" textAlign="center">
        <Text fontSize="5xl" mb={6}>
            Certificates
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {certificates.map((cert, index) => (
            <Box key={index}>
                <VStack spacing={4} align="stretch">
                <Box textAlign="left">
                    <Text fontWeight="bold" fontSize="lg">{cert.name}</Text>
                    <Text fontSize="md" color="gray.600">{cert.institution}</Text>
                    <Text fontSize="sm" color="gray.500">{cert.skills}</Text>
                    <Link href={cert.certificateUrl} color="blue.500" isExternal mt={2}>View Certificate</Link>
                </Box>
                {index < certificates.length - 1 && <Divider my={4} />}
                </VStack>
            </Box>
            ))}
      </SimpleGrid>
      </Container>
    </Box>
  );

export default Certifications;