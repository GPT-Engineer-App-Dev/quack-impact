import { Container, Text, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";
import duckBackground from "/images/duck-background.jpg";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage={`url(${duckBackground})`} bgSize="cover" bgRepeat="no-repeat" bgAttachment="fixed">
      <Heading as="h1" size="2xl" mb={4}>Ducks and Their Impact on Society</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Image src="/images/duck.jpg" alt="Duck" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck1.jpg" alt="Duck in natural setting" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck2.jpg" alt="Duckling" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Image src="/images/duck3.jpg" alt="Group of ducks" boxSize="300px" objectFit="cover" borderRadius="full" />
      </SimpleGrid>
      <Box bg="rgba(255, 255, 255, 0.8)" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mt={4}>
        <Text fontSize="lg">
          Ducks are fascinating creatures that have a significant impact on our environment and culture. From their role in ecosystems to their presence in art and media, ducks are more than just birds; they are a symbol of nature's beauty and resilience.
        </Text>
      </Box>
      <Box bg="rgba(255, 255, 255, 0.8)" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mt={4}>
        <Heading as="h2" size="xl" mb={4}>Ducks' Roles in Society</Heading>
        <Text fontSize="lg" mb={4}>
          Ducks play various roles in society, from being a source of food and livelihood for many communities to being featured in folklore and popular culture. They are also important for scientific research and environmental education. Ducks contribute to biodiversity and help maintain healthy ecosystems by controlling insect populations and dispersing seeds.
        </Text>
        <Image src="/images/duck4.jpg" alt="Duck in society" boxSize="300px" objectFit="cover" borderRadius="full" />
      </Box>
    </Container>
  );
};

export default Index;