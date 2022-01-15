import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "gatsby";

function Logout({ children }) {
  return (
    <Menu>
      <MenuButton as={Avatar} aria-label="Options" icon={children} />
      <MenuList>
        <Link to={"/"}>
          <MenuItem icon={<AiOutlineLogout />}>Log Out</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
export default Logout;
