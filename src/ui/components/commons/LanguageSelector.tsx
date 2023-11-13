import { InternationalizationContext } from "infrastructure/providers/InternationalizationContext";
import { useContext } from "react";
import {
  Select,
  MenuItem,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const internationalizationContext = useContext(InternationalizationContext);
  const { t } = useTranslation();

  const languages = [
    {
      code: "en",
      isoCode: "EN",
      name: "English",
      flag: "GB",
    },
    {
      code: "es",
      isoCode: "ES",
      name: "Spanish",
      flag: "ES",
    },
    {
      code: "ita",
      isoCode: "ITA",
      name: "Italian",
      flag: "IT",
    },
    {
      code: "fr",
      isoCode: "FR",
      name: "French",
      flag: "Fr",
    },
  ];

  function handleClickFlag(language: string) {
    internationalizationContext.changeLanguage(language);
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {t("buttons.language")}
      </MenuButton>
      <MenuList>
        {languages.map((language) => {
          return (
            <MenuItem
              key={language.code}
              value={language.code}
              onClick={() => {
                handleClickFlag(language.code);
              }}
            >
              <ReactCountryFlag
                key={language.code}
                countryCode={language.flag}
                svg
                title={language.name}
                style={{
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
              <Text fontSize="xl">{language.isoCode}</Text>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default LanguageSelector;
