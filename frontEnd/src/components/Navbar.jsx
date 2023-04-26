import {
  Box,
  Tooltip,
  Button,
  Text,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon, BellIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { ChatContext } from "../pages/chat/Chat";

const Navbar = () => {
  const user = useContext(ChatContext);
  console.log(user);

  const hadelSearch = () => {
    alert("gi");
  };

  return (
    <Box
      w="100vw"
      justifyContent="space-between"
      h="45px"
      bg="lightblue"
      display="flex"
      p="5px"
    >
      <Tooltip hasArrow label="Search user's" bg="pink.600">
        <Box
          display={"flex"}
          justifyContent="space-evenly"
          alignItems={"center"}
          w={{ base: "100px", md: "150px", lg: "200px" }}
          backgroundColor="lightgray"
          borderRadius={"5px"}
          onClick={hadelSearch}
        >
          Search <Search2Icon />
        </Box>
      </Tooltip>

      <Text
        display={"flex"}
        alignItems="center"
        fontSize={{ base: "15px", md: "25px", lg: "30px" }}
        fontWeight="700     "
      >
        Chat App
      </Text>

      <Box
        w="100px"
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="transparent"
            rightIcon={<BellIcon boxSize="1.5em" />}
          ></MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="transparent"
            rightIcon={
              <Avatar
                boxSize="2em"
                src={
                  user &&
                  `http://localhost:5000/uploads/${user.profilePic}`
                }
              >
                <AvatarBadge boxSize="0.8em" bg="green.500" />
              </Avatar>
            }
          ></MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
