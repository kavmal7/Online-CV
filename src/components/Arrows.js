import React from 'react';
import { Button, Icon, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Defining arrow styles for the carousel in the Projects component, with defined shapes and colours
export const PrevArrow = ({ className, style, onClick }) => (
  <IconButton
    className={className}
    onClick={onClick}
    position="absolute"
    left="-70px"
    top="50%"
    transform="translate(0, -50%)"
    zIndex="2"
    borderRadius="full"
    colorScheme='rgb(0, 127, 255)'
    bg='rgb(0, 127, 255)'
    _focus={{ boxShadow: "none" }}
    aria-label="Previous Slide"
    display="flex"
    justifyContent="center"
    alignItems="center"
    icon={<ChevronLeftIcon color="white" boxSize={6} />}
  >
  </IconButton>
);

export const NextArrow = ({ className, style, onClick }) => (
  <IconButton
    className={className}
    onClick={onClick}
    position="absolute"
    right="-70px"
    top="50%"
    transform="translate(0, -50%)"
    zIndex="2"
    borderRadius="full"
    colorScheme='rgb(0, 127, 255)'
    bg='rgb(0, 127, 255)'
    _focus={{ boxShadow: "none" }}
    aria-label="Next Slide"
    display="flex"
    justifyContent="center"
    alignItems="center"
    icon={<ChevronRightIcon color="white" boxSize={6} />}
  >
  </IconButton>
);