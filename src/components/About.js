import React from 'react';
import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import './About.css';

const About = () => (
  <Box id="about" height="100vh">
    <Flex height="100%" alignItems="center">
    <Container id='about-section' maxW="container.md" textAlign="center">
      <Text fontSize="5xl" mb={4} mt={4}>
        About Me
      </Text>
        <Box id='about-text' textAlign="justify" ml="auto" width="80%">
            <Text fontSize="lg" mb={4}>
                Hi, my name is Kavya Malhotra. I am a bachelor's student in Data Science with experience in retail, web development, and coding. My experiences in retail and group projects at my university have helped me become a good communicator and team player.
            </Text>
            <Text fontSize="lg" mb={4}>
                I picked Data Science as I have always been interested in topics such as Artificial Intelligence and its potential has always fascinated me. Data Science is a key field in order to get closer to Machine Learning and ultimately Artificial Intelligence. I am an eager learner with a high passion for the field of IT.
            </Text>
            <Text fontSize="lg" mb={4}>
                Even though I specialise in Data Science, my keen interest in computers has encouraged me to take extra courses to widen my scope in the realm of computer science (for example, computer networking). In addition to this, I have also taken online courses, including but not limited to C, Python, SQL, JavaScript, etc to deepen my understanding and working knowledge in this field.
            </Text>
            <Text fontSize="lg" mb={4}>
                In addition to the aforementioned, I am able to speak multiple languages. I am fluent in English, Norwegian, and Hindi, but also have a rudimentary understanding of other languages such as French and Japanese (that is, some words and phrases).
            </Text>
        </Box>
    </Container>
    </Flex>
  </Box>
);

export default About;
