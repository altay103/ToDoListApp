import { Button, Center, Checkbox, Flex, IconButton, Spacer, Text} from "@chakra-ui/react";
import {AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
function Task(props){
    let [hide,setHide]=useState(true);
    let [type,setType]=useState("cite");
    let changeType=()=>{
        if(type=="del"){
            setType("cite");
        }else{
            setType("del");   
        }
    }
    if(hide){
        return(
        <Center>

            <Flex w='500px' >
                <Button flex={1} variant='ghost' onClick={changeType}>
                    <Text as={type}>{props.taskName}</Text>          
                </Button>
            
                <IconButton 
                    icon={<AiOutlineClose/>} 
                    onClick={()=>setHide(false)}>   
                </IconButton>
            </Flex>
        
         </Center>
        )
    }else{
        return false
    }
}

export default Task;


