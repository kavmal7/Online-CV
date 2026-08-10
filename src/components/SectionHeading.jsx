import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }) => (
  <Heading
    as="h2"
    fontSize={{ base: '3xl', md: '5xl' }}
    mb={6}
    textAlign="center"
  >
    {children}
  </Heading>
);

export default SectionHeading;
