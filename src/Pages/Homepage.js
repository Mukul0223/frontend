import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        textAlign={"center"}
        justifyContent={"center"}
        p={3}
        bg={"#FF5733"}
        w={"100%"}
        m={"20px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        boxShadow={"3px 3px 5px black"}
      >
        <Text
          fontSize={"5xl"}
          fontFamily={"Work sans"}
          fontWeight={{ base: "normal", md: "bold" }}
          textShadow={"0px 3px 4px cyan"}
          color={"whitesmoke"}
        >
          Yapp
        </Text>
      </Box>
      <Box
        bg={"whitesmoke"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
        boxShadow={"3px 3px 5px black"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <Signup></Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
