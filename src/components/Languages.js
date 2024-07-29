import React from 'react';
import { Box, Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';

// Laying out data for the component
const languages = [
    {
      name: 'English',
      proficiency: 'Fluent',
      description: 'Grew up speaking English both frequently at home, and at school, having gone to an International School and the IB Diploma, on social media, and in books.'
    },
    {
      name: 'Norwegian',
      proficiency: 'Fluent',
      description: 'Being raised in Norway, I am able to fluently speak Norwegian both casually and professionally.'
    },
    {
      name: 'Other Scandinavian Languages',
      proficiency: 'Relative fluency',
      description: 'Due to their proximity to Norwegian, I can somewhat understand Danish and Swedish. Written Danish is very easy to understand, but spoken Danish is not as easy. Spoken Swedish is more understandable, while the writing can be less legible (but still somewhat understandable).'
    },
    {
      name: 'Hindi',
      proficiency: 'Fluent (mother tongue)',
      description: 'Having grown up in a family that speaks Hindi, I was able to pick it up as my mother tongue.'
    },
    {
      name: 'Urdu',
      proficiency: 'Fluency in speech',
      description: 'Due to its high level of similarity with Hindi, I am able to understand and hold conversation with an Urdu speaker.'
    },
    {
      name: 'French',
      proficiency: 'Rudimentary',
      description: 'Having studied French during the MYP programme, I was able to learn the language on a basic level.'
    },
    {
      name: 'Punjabi',
      proficiency: 'Comprehensive',
      description: 'As part of my family speaks Punjabi, I have somewhat picked it up and can understand basic conversation.'
    },
    {
      name: 'Japanese',
      proficiency: 'Rudimentary',
      description: 'This is something I largely picked up from Japanese animated shows. I know some basic phrases and can largely understand the kana alphabet.'
    },
    {
      name: 'Polish',
      proficiency: 'Rudimentary',
      description: 'Having been to Poland 3 times before, I was able to pick up some basic phrases, but can also read and pronounce the text to an extent.'
    },
    {
      name: 'Cyrillic alphabet',
      proficiency: 'Can mostly understand the alphabet',
      description: 'This is something I picked up out of curiosity. I can understand much of the alphabet and even know a few words in Russian.'
    }
];

// Defining the component layout, using the same accordion div as for the skills and hobbies
const Languages = () => (
  <Box id="languages" py={8} display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" minHeight="100vh">
    <Container maxW="container.md" textAlign="center" alignItems="center">
      <Text fontSize="5xl" mb={6}>
        Languages
      </Text>
      <Accordion allowToggle>
        {languages.map((language, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {language.name} ({language.proficiency})
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {language.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </Box>
);
  
export default Languages;