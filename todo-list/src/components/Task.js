import { Button, Center, Checkbox, Flex, IconButton, Spacer, Text} from "@chakra-ui/react";
import {AiOutlineClose} from "react-icons/ai";
function Task(){
    return(
        
        <Center>

            <Flex w='500px' >
                <Button flex={1} variant='ghost'>
                    Task Here
                </Button>
               
                <IconButton icon={<AiOutlineClose/>}></IconButton>
            </Flex>
                
        </Center>

    )
}

export default Task;


