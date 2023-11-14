import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  useColorModeValue,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnHome: () => void;
  title: string;
  bodyText: string;
  goodOrBad: boolean;
}

function PredictionModal({
  isOpen,
  onClose,
  returnHome,
  title,
  bodyText,
  goodOrBad,
}: ModalProps) {
  const { t } = useTranslation();
  const successColor = useColorModeValue("green.500", "green.300");
  const dangerColor = useColorModeValue("red.500", "red.300");

  const iconColor = goodOrBad ? successColor : dangerColor;
  const IconComponent = goodOrBad ? CheckCircleIcon : WarningTwoIcon;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t(title)}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex mb={5}>{t(bodyText)}</Flex>
          <Center>
            <Icon as={IconComponent} boxSize={45} color={iconColor} mb={5} />
          </Center>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              returnHome();
            }}
            leftIcon={<Icon as={FaHome} />}
          >
            {t("buttons.back_home")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PredictionModal;
