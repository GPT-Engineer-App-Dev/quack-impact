import { Container, Text, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl" mb={4}>Ducks and Their Impact on Society</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Image src="/images/duck.jpg" alt="Duck" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck1.jpg" alt="Duck in natural setting" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck2.jpg" alt="Duckling" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck3.jpg" alt="Group of ducks" boxSize="300px" objectFit="cover" borderRadius="full" />
      </SimpleGrid>
      <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mt={4}>
        <Text fontSize="lg">
          Ducks are fascinating creatures that have a significant impact on our environment and culture. From their role in ecosystems to their presence in art and media, ducks are more than just birds; they are a symbol of nature's beauty and resilience.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;