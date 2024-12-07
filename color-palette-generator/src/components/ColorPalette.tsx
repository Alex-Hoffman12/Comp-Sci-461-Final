import { Card, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ColorPalette1 from "../entities/colorPalette1";
import ColorPalette2 from "../entities/colorPalette2";
import ColorPalette3 from "../entities/colorPalette3";
import ColorPalette4 from "../entities/colorPalette4";
import ColorPalette5 from "../entities/colorPalette5";
import ColorPalette6 from "../entities/colorpalette6";
import ColorPalette7 from "../entities/colorPalette7";

interface Props {
  index: number;
}

const ColorPalette = ({ index }: Props) => {
  const [colors, setColors] = useState<string[]>([] as string[]);

  useEffect(() => {
    switch (index) {
      case 0:
        setColors(ColorPalette1);
        return;
      case 1:
        setColors(ColorPalette2);
        return;
      case 2:
        setColors(ColorPalette3);
        return;
      case 3:
        setColors(ColorPalette4);
        return;
      case 4:
        setColors(ColorPalette5);
        return;
      case 5:
        setColors(ColorPalette6);
        return;
      case 6:
        setColors(ColorPalette7);
        return;
    }
  }, [index]);

  const boxHeight = useBreakpointValue({ base: "500px", md: "550px" });
  const boxWidth = useBreakpointValue({ base: "200px", md: "220px" });

  return (
    <SimpleGrid columns={{ base: 5 }} p={5} minWidth="100%">
      {colors.map((color, index) => (
        <Card.Root height={boxHeight} width={boxWidth} border={2} borderColor={"black"}>
          <Card.Body bg={color} key={index} />
          <Card.Footer bg={"black"} textAlign="center" justifyContent="center">
            <Text
              color={color}
              fontSize="lg"
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              {color.slice(1, color.length).toUpperCase()}
            </Text>
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default ColorPalette;
