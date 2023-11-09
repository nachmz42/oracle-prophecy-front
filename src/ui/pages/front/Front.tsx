import { useState } from "react";
import { Box, Button, Center, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SampleImage from "../../../infrastructure/assets/Sample1.png";
import SampleImage2 from "../../../infrastructure/assets/Sample2.png";
import SampleImage3 from "../../../infrastructure/assets/Sample3.png";

const imageAndLinks = [
  {
    imageUrl: SampleImage,
    linkTo: "/heart-attack",
  },
  {
    imageUrl: SampleImage2,
    linkTo: "/pagina2",
  },
  {
    imageUrl: SampleImage3,
    linkTo: "/pagina3",
  },
];

function Front() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageAndLinks.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + imageAndLinks.length) % imageAndLinks.length
    );
  };

  const currentImage = imageAndLinks[currentIndex];
  return (
    <Center h="100vh">
      <Container>
        <Center>
          <Box>
            <Image
              boxSize="300px"
              objectFit="cover"
              borderRadius="full"
              src={currentImage.imageUrl}
              alt={`Image ${currentIndex + 1}`}
            />
          </Box>
        </Center>
        <Box mt={4}>
          <Center>
            <Link to={currentImage.linkTo}>
              <Button colorScheme="teal">Ir a Página {currentIndex + 1}</Button>
            </Link>
          </Center>
        </Box>
        <Box mt={4}>
          <Center>
            <Button onClick={goToPrevious}>Anterior</Button>
            <Button ml={4} onClick={goToNext}>
              Siguiente
            </Button>
          </Center>
        </Box>
      </Container>
    </Center>
  );
}

export default Front;
