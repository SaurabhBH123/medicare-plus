import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Box,

} from "@chakra-ui/react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext";
export default function Logout() {
  const {setIsLoggedIn,setToken}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogout = async() => {
      try {
        setIsLoggedIn(false);
        setToken('')
        navigate("/");
      } catch (err) {
        console.log(err.message);
      }
  };

  return (
    <Box mx={50} zIndex={6}>
      <Menu maxW={"20%"}>
        <MenuButton>
          <Avatar
            size="sm"
            mt={1}
            name="Ryan Florence"
            src={"https://bit.ly/ryan-florence"}
          />
        </MenuButton>
        <MenuList w={"10%"} mt={1} ml={-10} color={'black'}>
          <MenuGroup textAlign={'left'} title={"Hello "}>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup textAlign={'left'} title="Help">
            <MenuItem>Docs</MenuItem>
          </MenuGroup>
          <MenuGroup title="">
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
