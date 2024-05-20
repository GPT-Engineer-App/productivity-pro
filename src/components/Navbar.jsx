import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-between">
      <Link as={NavLink} to="/" color="white" fontWeight="bold" mr={4}>
        Home
      </Link>
      <Link as={NavLink} to="/about" color="white" fontWeight="bold">
        About
      </Link>
    </Flex>
  </Box>
);

export default Navbar;