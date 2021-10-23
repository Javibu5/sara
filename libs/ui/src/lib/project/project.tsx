import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTasks } from '@sara/hooks';

import TaskList from '../task-list/task-list';
import { getDateString } from '../time';

interface TaskProps {
  name: string;
  projectId: string;
  isFinished: boolean;
  employeeId: string[];
}

export const Project = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {getDateString(new Date())}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <Heading
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            Lista de tareas
          </Heading>
          <Accordion defaultIndex={1} allowToggle alignItems="center">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Información
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Aquí aparecerán la listas de tareas que tienes asignadas. Un
                superior te asignará las tareas y verificará aquellas que están
                completadas. Pulsa el boton para marcar una tarea como
                completada
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex alignItems="center">
            <TaskList></TaskList>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
