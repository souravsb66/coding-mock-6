import React from "react";
import { useSelector } from "react-redux";
import { Input, Container, Heading } from "@chakra-ui/react";


const Home = () => {

  const {isAuth} = useSelector((store) => store.authReducer);

  console.log(isAuth);
  
  return (
    <Container>
      <Heading>
        Home
      </Heading>
    </Container>
  );
};

export default Home;
