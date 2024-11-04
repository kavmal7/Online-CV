import React from 'react';
import { Box, Container, Text, Flex, Image } from '@chakra-ui/react';
import logo from "./extra_files/logo-rounded.png";

// Defining About component with title, image, and text block
const About = () => (
  <Box id="about" py={8} minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" width="100vw">
    <Container id='about-section' maxW="container.xl" textAlign="center" alignItems="center">
      <Text fontSize="5xl" mb={4} mt={4}>
        About Me
      </Text>
        <Flex>
            <Box flex="1" mr={10}>
                <Image src={logo} alt="About Me" boxSize="500px" borderRadius="15px"/>
            </Box>
            
            <Box flex="2" textAlign="justify" ml={12} width="60%">
                <Text fontSize="lg" mb={4}>
                    Hi, my name is Kavya Malhotra and welcome to my online CV. I am a bachelor's graduate in Data Science with experience in retail and development. My experiences in my profession and group projects at my university have helped me become a good communicator and team player, working with people from many parts of the world.
                </Text>
                <Text fontSize="lg" mb={4}>
                    I picked Data Science as I have always been interested in topics such as Artificial Intelligence and its potential has always fascinated me. Data Science is a key field that has a significant overlap with AI and Machine Learning, both of which are my key interests.
                </Text>
                <Text fontSize="lg" mb={4}>
                    Even though I specialise in Data Science, my keen interest in computers has encouraged me to take extra courses to widen my scope in the realm of computer science (for example, computer networking and operating systems). In addition to this, I have also taken online courses, from courses on various programming languages to courses about more in-depth topics such as reinforcement learning. This has deepened my understanding and working knowledge in these areas, which I have been (to a large extent) able to apply professionally as well.
                </Text>
                <Text fontSize="lg" mb={4}>
                    In addition to the aforementioned, I am able to speak multiple languages. I am fluent in English, Norwegian, and Hindi, but also have a rudimentary understanding of other languages such as French.
                </Text>
            </Box>   
        </Flex>
    </Container>
  </Box>
);

export default About;
