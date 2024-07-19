import React from 'react';
import { Box, Flex, Link, HStack, Text, Spacer } from '@chakra-ui/react';

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

const NavLink = ({ children, href }) => (
    <Link
      px={3}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
      href={href}
      fontFamily="'Roboto Condensed', sans-serif"
      color="gray.800"
    >
      {children}
    </Link>
);
  
const Header = () => {
    return (
      <Box bg="white" px={4} color="black" borderBottom="1px" borderColor="gray.200">
        <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
            <Text fontSize="xl" fontWeight="bold" flex="1" textAlign="left" fontFamily="'Roboto Condensed', sans-serif" ml={-59}>
              My Portfolio
            </Text>
            <Spacer/>
            <HStack as="nav" spacing={3}>
              {links.map((link) => (
                <NavLink key={link.id} href={`#${link.id}`}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            <Spacer/>
        </Flex>
      </Box>
    );
};
  
export default Header;