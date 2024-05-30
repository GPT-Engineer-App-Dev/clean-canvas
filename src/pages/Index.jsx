import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4}>Home</Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">About</Button>
        </Box>
        {isMobile && (
          <Box display={{ base: "block", md: "none" }}>
            <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={2}>Home</Button>
            <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">About</Button>
          </Box>
        )}
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;