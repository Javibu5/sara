import { Icon } from '@chakra-ui/icons';
import { Button, Switch, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Button
      p="0"
      onClick={toggleColorMode}
      variant="ghost"
      _focus={{ border: 0 }}
    >
      {isDark ? <Icon as={RiSunFill} /> : <Icon as={RiMoonFill} />}
    </Button>
  );
};
