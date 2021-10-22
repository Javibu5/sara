import { Icon } from '@chakra-ui/icons';
import {
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { TaskDto } from '@sara/contracts/task';
import { useTasks } from '@sara/hooks';
import { BsCheckSquareFill } from 'react-icons/bs';

interface TaskProps {
  name: string;
  projectId: string;
  isFinished: boolean;
  employeeId: string[];
}

function TaskList() {
  const { tasks = [] }: { tasks: TaskDto[] } = useTasks();
  console.log('🚀 ~ file: task-list.tsx ~ line 23 ~ TaskList ~ tasks', tasks);

  return (
    <Stack
      direction={{ base: 'column' }}
      w="full"
      bg={{ md: useColorModeValue('white', 'gray.800') }}
      shadow="lg"
    >
      {tasks.map((token, tid) => {
        return (
          <Flex w="full" direction={{ base: 'row', md: 'column' }} key={tid}>
            <SimpleGrid
              spacingY={3}
              columns={{ base: 1, md: 2 }}
              w="full"
              py={2}
              px={10}
              fontWeight="hairline"
            >
              <chakra.span
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {token.name}
              </chakra.span>
              <Flex justify={{ md: 'end' }}>
                <Button
                  size="sm"
                  variant="solid"
                  leftIcon={<Icon as={BsCheckSquareFill} />}
                  colorScheme="purple"
                >
                  Completada
                </Button>
              </Flex>
            </SimpleGrid>
          </Flex>
        );
      })}
    </Stack>
  );
}

export default TaskList;
