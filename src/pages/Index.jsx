import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Ducks and Their Impact on Society</Heading>
        <Image src="/images/duck.jpg" alt="Duck" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
          <Text fontSize="lg">
            Ducks are fascinating creatures that have a significant impact on our environment and culture. From their role in ecosystems to their presence in art and media, ducks are more than just birds; they are a symbol of nature's beauty and resilience.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;