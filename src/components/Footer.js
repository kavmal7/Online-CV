import React from 'react';
import { Box, Container, HStack, Link, Text, Image } from '@chakra-ui/react';

import linkedinLogo from './extra_files/In-White-128.png';
import githubLogo from './extra_files/github-mark-white.png';
import gitlabLogo from './extra_files/gitlab-logo-700.png';

// Defining a black background footer containing e-mail and relevant links positioned horisontally
const Footer = () => (
  <Box id="footer" bg="black" color="white" py={4} position="relative" bottom={0} width="100%" alignItems="center" display="flex" flexDirection="column" justifyContent="center">
    <Container maxW="container.md" textAlign="center" alignItems="center">
      <Text mb={4}>Contact me: kavyamal74@gmail.com</Text>
      <HStack spacing={6} justify="center">
        <Link href="https://www.linkedin.com/in/kavya-malhotra" isExternal>
          <Image src={linkedinLogo} alt="LinkedIn" boxSize="30px"/>
        </Link>
        <Link href="https://github.com/kavmal7" isExternal>
          <Image src={githubLogo} alt="GitHub" boxSize="30px"/>
        </Link>
        <Link href="https://git.app.uib.no/Kavya.Malhotra" isExternal>
          <Image src={gitlabLogo} alt="GitLab" boxSize="30px"/>
        </Link>
      </HStack>
    </Container>
  </Box>
);
  
export default Footer;