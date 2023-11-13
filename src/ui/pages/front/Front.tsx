import { useState } from "react";
import { Box, Button, Center, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SampleImage from "../../../infrastructure/assets/Sample1.png";
import SampleImage2 from "../../../infrastructure/assets/Sample2.png";
import SampleImage3 from "../../../infrastructure/assets/Sample3.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "ui/components/commons/LanguageSelector";

const imageAndLinks = [
  {
    imageUrl: SampleImage,
    linkTo: "/heart-attack",
    title: "heart_attack",
  },
  {
    imageUrl: SampleImage2,
    linkTo: "/pagina2",
    title: "placeholder_1",
  },
  {
    imageUrl: SampleImage3,
    linkTo: "/pagina3",
    title: "placeholder_2",
  },
];

function Front() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
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
    <Center flexDirection="column" height="100vh">
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
              <Button colorScheme="teal">
                {t("buttons.go_to") + " "} {t("titles." + currentImage.title)}
              </Button>
            </Link>
          </Center>
        </Box>
        <Box mt={4}>
          <Center>
            <Button onClick={goToPrevious}>{t("buttons.previous")}</Button>
            <Button ml={4} onClick={goToNext}>
              {t("buttons.next")}
            </Button>
          </Center>
        </Box>
      </Container>
      <Container>
        <Box mt={4}>
          <Center>
            <LanguageSelector />
          </Center>
        </Box>
      </Container>
    </Center>
  );
}

export default Front;
