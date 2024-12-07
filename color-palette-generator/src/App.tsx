import {
  Box,
  Button,
  Container,
  Heading,
  useBreakpointValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import ColorPalette from "./components/ColorPalette";

function App() {
  const [count, setCount] = useState(0);

  const containerPadding = useBreakpointValue({ base: "4", md: "8" });

  const handleClick = () => {
    setCount((prev) => (prev >= 6 ? 0 : prev + 1));
  };

  return (
    <Box
      bgGradient="linear(to-br, teal.200, blue.500)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="100vw" p={containerPadding} centerContent>
        <VStack>
          <Heading as="h1" size="2xl" color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)">
            Color Palaette Generator
          </Heading>
          <Text fontSize={"lg"}>
            Click the button bellow to generatea colorblind accessible color palette
          </Text>
          <ColorPalette index={count} />
          <Button onClick={handleClick}>Generate new Palette</Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
