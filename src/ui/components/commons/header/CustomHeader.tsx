import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function CustomHeader({ title, logo }: { title: string; logo: any }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const backHome = () => {
    navigate("/");
  };

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        ml={80}
        mr={80}
        mt={35}
        mb={35}
        alignItems="center"
      >
        <GridItem ml={55}>
          <Avatar size="2xl" name={t(title)} src={logo} />
        </GridItem>
        <GridItem>
          <Heading size="lg" fontSize="50px">
            {t(title)}
          </Heading>
        </GridItem>
        <GridItem>
          <ButtonGroup gap={35}>
            <Button onClick={backHome} leftIcon={<Icon as={FaHome} />}>
              {t("buttons.back_home")}
            </Button>
            <LanguageSelector />
          </ButtonGroup>
        </GridItem>
      </Grid>
      <Divider borderColor="gray.500" mt={4} />
    </>
  );
}

export default CustomHeader;
