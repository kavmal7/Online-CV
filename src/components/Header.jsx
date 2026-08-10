import {
  Box,
  Collapse,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

// Defining the name to links (id) mappings
const links = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Work Experience', id: 'work-experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Languages', id: 'languages' },
    { name: 'Skills & Hobbies', id: 'skills-hobbies' },
    { name: 'Contact', id: 'footer' },
];

// Defining the clickable text links with a custom font
const NavLink = ({ children, href, onClick }) => (
  <Link
    href={href}
    px={3}
    py={2}
    rounded="md"
    onClick={onClick}
    fontFamily="'Roboto Condensed', sans-serif"
    color="gray.800"
    _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    _focusVisible={{ boxShadow: 'outline' }}
  >
    {children}
  </Link>
);

// Defining the main header component, where we merge all the above parts
const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      bg="white"
      color="black"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex="1000"
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading
            as="h1"
            fontSize="xl"
            fontFamily="'Roboto Condensed', sans-serif"
          >
            <Link href="#about" _hover={{ textDecoration: 'none' }}>
              Kavya Malhotra
            </Link>
          </Heading>
          <HStack
            as="nav"
            aria-label="Primary navigation"
            spacing={1}
            display={{ base: 'none', lg: 'flex' }}
          >
            {links.map((link) => (
              <NavLink key={link.id} href={`#${link.id}`}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <IconButton
            display={{ base: 'inline-flex', lg: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <VStack
            id="mobile-navigation"
            as="nav"
            aria-label="Mobile primary navigation"
            align="stretch"
            pb={4}
            display={{ lg: 'none' }}
          >
            {links.map((link) => (
              <NavLink key={link.id} href={`#${link.id}`} onClick={onClose}>
                {link.name}
              </NavLink>
            ))}
          </VStack>
        </Collapse>
      </Container>
    </Box>
  );
};
  
export default Header;
