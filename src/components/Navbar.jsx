import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  Image
} from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png"

const Navbar = () => {
  return (
    <div>
      <Flex align="center" justify="center" maxW="100%">
        <Box  maxW="15%" p="4">
          {/*  */}
          <Link to={"/"}>
            <Image className="Logo" src={logo} alt="Proyecto-Escaray" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              color="white"
              className="btnCategorias"
            >
              Categorias
            </MenuButton>
            <MenuList className="dropdownCategorias">
              {/*  */}
              <Link to={`/categoria/${"gaming"}`}>
                <MenuItem>Gaming</MenuItem>
              </Link>
              <Link to={`/categoria/${"accesorios"}`}>
                <MenuItem>Accesorios</MenuItem>
              </Link>
              <Link to={`categoria/${"camisetas"}`}>
                <MenuItem>Camisetas</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          {/* */}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
