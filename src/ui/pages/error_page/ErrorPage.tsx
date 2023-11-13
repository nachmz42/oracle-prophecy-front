import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { CustomError } from "utils/CustomError";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const location = useLocation();
  const error: CustomError = location.state && location.state.error;
  const { t } = useTranslation();

  return (
    <>
      {error && (
        <Box textAlign="center" py={10} px={6}>
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={"red.500"}
              rounded={"50px"}
              w={"5rem"}
              h={"5rem"}
              textAlign="center"
            >
              <CloseIcon boxSize={"20px"} color={"white"} />
            </Flex>
          </Box>
          <Heading as="h2" size="x1" mt={6} mb={2}>
            {t("errors.unexpected_error")}
          </Heading>
          <Text as="kbd" fontSize="25px">
            {error?.message}
          </Text>
          <br />
          <Link to="/">
            <Button colorScheme="red"> {t("buttons.back_home")}</Button>
          </Link>
        </Box>
      )}
    </>
  );
}

export default ErrorPage;
