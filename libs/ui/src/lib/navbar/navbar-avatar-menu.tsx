import { Flex } from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

export const NavbarAvatarMenu = () => {
  const styles = useStyleConfig("NavbarButton");

  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW="0"
          sx={styles}
        >
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Opción 1</MenuItem>
          <MenuItem>Opción 2</MenuItem>
          <MenuItem>Opción 3</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
