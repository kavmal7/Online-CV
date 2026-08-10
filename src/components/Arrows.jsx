import { IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Defining arrow styles for the carousel in the Projects component, with defined shapes and colours
export const PrevArrow = ({ className, onClick }) => (
  <IconButton
    className={className}
    onClick={onClick}
    position="absolute"
    left={{ base: '-4px', md: '-36px' }}
    top="50%"
    transform="translate(0, -50%)"
    zIndex="2"
    borderRadius="full"
    colorScheme="blue"
    bg="blue.500"
    _hover={{ bg: 'blue.600' }}
    _focus={{ boxShadow: "none" }}
    aria-label="Previous Slide"
    display="flex"
    justifyContent="center"
    alignItems="center"
    icon={<ChevronLeftIcon color="white" boxSize={6} />}
  />
);

export const NextArrow = ({ className, onClick }) => (
  <IconButton
    className={className}
    onClick={onClick}
    position="absolute"
    right={{ base: '-4px', md: '-36px' }}
    top="50%"
    transform="translate(0, -50%)"
    zIndex="2"
    borderRadius="full"
    colorScheme="blue"
    bg="blue.500"
    _hover={{ bg: 'blue.600' }}
    _focus={{ boxShadow: "none" }}
    aria-label="Next Slide"
    display="flex"
    justifyContent="center"
    alignItems="center"
    icon={<ChevronRightIcon color="white" boxSize={6} />}
  />
);
