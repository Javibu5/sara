import { Icon } from '@chakra-ui/icons';
import {
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectDto } from '@sara/contracts/project';
import { TaskDto } from '@sara/contracts/task';
import { useProjects, useTasks } from '@sara/hooks';
import { useSession } from 'next-auth/client';
import { BsCheckSquareFill } from 'react-icons/bs';

interface TaskProps {
  name: string;
  projectId: string;
  isFinished: boolean;
  employeeId: string[];
}

function TaskList() {
  const [session, loadingSession] = useSession();
  const { tasks = [] }: { tasks: TaskDto[] } = useTasks();

  async function handleClickTaskCompleted(task: TaskDto) {
    const state = true;
    await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || process.env.NX_PUBLIC_API_URL
      }/api/tasks/${task._id}`,
      {
        method: 'Put',
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: task.name,
          projectId: task.projecId,
          employees: task.employeeId,
          isFinished: state,
        }),
      }
    );
  }

  return (
    <Stack
      direction={{ base: 'column' }}
      w="full"
      bg={{ md: useColorModeValue('white', 'gray.800') }}
      shadow="lg"
    >
      {tasks.map((token, tid) => {
        if (token.isFinished === false) {
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
                    onClick={() => {
                      handleClickTaskCompleted(token);
                    }}
                  >
                    Completada
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        }
        return;
      })}
    </Stack>
  );
}

export default TaskList;
