import {Button, Center, Flex, Input, Text, VStack} from "@chakra-ui/react";

function Header(){
    return(
        <VStack>
            
            <Text padding={'3'} fontSize='4xl'>
                Todo List App
            </Text>
            <Flex width='500px'>
                <Input />
                <Button >Add</Button>
            </Flex>
            
        </VStack>
    )
}

export default Header;