import { Box, Container, Text, Flex, Image } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';
import logo from './extra_files/profile-logo.png';

// Defining About component with title, image, and text block
const About = () => (
  <Box py={{ base: 8, md: 12 }} width="full">
    <Container maxW="container.xl">
      <SectionHeading>About Me</SectionHeading>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 8, lg: 12 }}
          align="center"
        >
            <Box flex="1" width="full" maxW={{ base: '320px', md: '420px' }}>
                <Image
                  src={logo}
                  alt="Kavya Malhotra"
                  width="full"
                  aspectRatio={4 / 3}
                  objectFit="cover"
                  borderRadius="15px"
                />
            </Box>

            <Box flex="2" textAlign="left" width="full">
                <Text fontSize="lg" mb={4}>
                    Hi, my name is Kavya Malhotra and welcome to my online CV. I am a graduate in Data Science with experience in retail and development. My experiences in my professional work and group projects during my studies have helped me become a good communicator and team player, working with people from many parts of the world.
                </Text>
                <Text fontSize="lg" mb={4}>
                    I have always been interested in topics such as Artificial Intelligence and its potential has always fascinated me. This is a major reason as to why I opted for a bachelor's degree in Data Science is a key field that has a significant overlap with AI and Machine Learning.
                </Text>
                <Text fontSize="lg" mb={4}>
                    Even though I specialise in Data Science, my keen interest in computers has encouraged me to take extra courses to widen my scope in the realm of computer science (for example, computer networking and operating systems). In addition to this, I have also taken online courses, from courses on various programming languages to courses about more in-depth topics such as reinforcement learning. This has deepened my understanding and working knowledge in these areas, which I have been (to a large extent) able to apply professionally as well.
                </Text>
                <Text fontSize="lg" mb={4}>
                    In addition to the aforementioned, I am able to speak multiple languages. I am fluent in English, Norwegian (and therefore can also understand Swedish and Danish to a good extent), and Hindi, but also have limited understanding of other languages such as French.
                </Text>
            </Box>
        </Flex>
    </Container>
  </Box>
);

export default About;
