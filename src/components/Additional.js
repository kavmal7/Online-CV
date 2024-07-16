import React from 'react';
import './Additional.css';
import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from '@chakra-ui/react';

const skillsHobbies = [
  {
    title: 'Python',
    description: 'I have been coding in Python for several years, and forms the bulk of my experience. It has been especially useful for Data Science and ML, with frameworks such as NumPy, Pandas, and PyTorch.',
  },
  {
    title: 'Java',
    description: 'I have had the opportunity to code in Java, where I have done some projects, among those being a game.',
  },
  {
    title: 'JavaScript, HTML & CSS',
    description: 'JavaScript, HTML, and CSS have been crucial for my work during web development, whether professionally or for personal projects, like this website.',
  },
  {
    title: 'C',
    description: 'I have some experience in C, mostly in academic scenarios, where I was able to really learn about the inner workings of operating systems and software.',
  },
  {
    title: 'MATLAB',
    description: 'I have also coded in MATLAB, mostly in academic scenarios (chiefly during my visual computing course), which was useful for my development in Data Science.',
  },
  {
    title: 'Spreadsheet',
    description: 'I have been using spreadsheets mostly at my work, which has been important for tracking products, pricing, or other variables.'
  },
  {
    title: 'Social Media Management',
    description: 'I have also helped manage the Facebook social media account of my current company, where we advertise and promote our products.',
  },
  {
    title: 'Football',
    description: 'I enjoy playing and watching Football, which I have been doing since childhood.'
  },
  {
    title: 'Cars',
    description: 'I have been fascinated by cars since I was a child. I also enjoy motorsports such as Formula 1 and Endurance Racing.'
  },
  {
    title: 'Health & Fitness',
    description: 'I regularly train at my local gym at least 4 times a week. This helps me build up my fitness and is helpful mentally too.'
  },
  {
    title: 'Gaming',
    description: 'Perhaps like most people my age, I enjoy gaming. I have played a wide range of games, from single player to multiplayer, both on PlayStation and PC.'
  },
  {
    title: 'Reading',
    description: 'I have been reading books from a young age. In particular, I like reading science-based or fact books, but I have also read fiction books.'
  }
];

const Additional = () => (
  <Box id="skills-hobbies" w="100%" minH="100vh" d="flex" alignItems="center" justifyContent="center" bg="lightgray">
    <Container maxW="container.md" textAlign="center">
      <Heading as="h2" size="xl" mb={6}>
        Skills & Hobbies
      </Heading>
      <Accordion allowToggle>
        {skillsHobbies.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </Box>
);
  
export default Additional;