import React from 'react';
import { Box, Flex, Link, HStack, Text, Spacer, Container } from '@chakra-ui/react';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const header = document.querySelector('header');
        const headerOffset = header.offsetHeight;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

const links = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Work Experience', id: 'work-experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Languages', id: 'languages' },
    { name: 'Skills & Hobbies', id: 'skills-hobbies' },
    { name: 'Footer', id: 'footer' }
];

const NavLink = ({ children, href, onClick }) => (
    <Link
      px={3}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
      onClick={onClick}
      fontFamily="'Roboto Condensed', sans-serif"
      color="gray.800"
    >
      {children}
    </Link>
);
  
const Header = () => {
    return (
      <Box
        as="header"
        position="fixed"
        width="100%"
        bg="white"
        px={4}
        color="black"
        borderBottom="1px"
        borderColor="gray.200"
        zIndex="1000"
        boxShadow="sm"
      >
        <Container maxW="container.lg">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold" textAlign="left" fontFamily="'Roboto Condensed', sans-serif">
              My Portfolio
            </Text>
            <HStack as="nav" spacing={4}>
              {links.map((link) => (
                <NavLink key={link.id} onClick={() => scrollToSection(link.id)}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>
    );
  };
  
export default Header;