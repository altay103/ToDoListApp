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
import TaskManager from './components/TaskManager';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack>
          <Header></Header>
          <TaskManager></TaskManager>
        </VStack>
        
      </Center>
    </ChakraProvider>
  );
}

export default App;
