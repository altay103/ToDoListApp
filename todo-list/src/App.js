import React from 'react';
import {
  ChakraProvider,
  theme,
  Center,
  Input,
  VStack,
  Spacer
} from '@chakra-ui/react';
import Header from './components/Header';
import Task from './components/Task';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack>
          <Header></Header>
          <Spacer></Spacer>
          <Task></Task>
          <Task></Task>
        </VStack>
        
      </Center>
    </ChakraProvider>
  );
}

export default App;
