/* eslint-disable-next-line */
import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

export function WizardDocument() {
  return <ReturnFocus></ReturnFocus>;
}

export default WizardDocument;

function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <Button mt={1} onClick={onOpen}>
        Subir documento
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subir documentos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DocumentForm></DocumentForm>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function DocumentForm() {
  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
      <Box>
        <chakra.form
          method="POST"
          shadow="base"
          rounded={[null, 'md']}
          overflow={{ sm: 'hidden' }}
        >
          <Stack
            px={4}
            py={5}
            bg={useColorModeValue('white', 'gray.700')}
            spacing={6}
            p={{ sm: 6 }}
          >
            <FormControl>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color={useColorModeValue('gray.700', 'gray.50')}
              >
                Archivo
              </FormLabel>
              <Flex
                mt={1}
                justify="center"
                px={6}
                pt={5}
                pb={6}
                borderWidth={2}
                borderColor={useColorModeValue('gray.300', 'gray.500')}
                borderStyle="dashed"
                rounded="md"
              >
                <Stack spacing={1} textAlign="center">
                  <Icon
                    mx="auto"
                    boxSize={12}
                    color={useColorModeValue('gray.400', 'gray.500')}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex
                    fontSize="sm"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    alignItems="baseline"
                  >
                    <chakra.label
                      htmlFor="file-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      color={useColorModeValue('brand.600', 'brand.200')}
                      pos="relative"
                      _hover={{
                        color: useColorModeValue('brand.400', 'brand.300'),
                      }}
                    >
                      <span>Pulsa para subir un archivo</span>
                      <VisuallyHidden>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                        />
                      </VisuallyHidden>
                    </chakra.label>
                    <Text pl={1}>o arrastra y suelta el archivo</Text>
                  </Flex>
                  <Text
                    fontSize="xs"
                    color={useColorModeValue('gray.500', 'gray.50')}
                  >
                    Archivo hasta 10MB
                  </Text>
                </Stack>
              </Flex>
            </FormControl>
          </Stack>
          <Box
            px={{ base: 4, sm: 6 }}
            py={3}
            bg={useColorModeValue('gray.50', 'gray.900')}
            textAlign="right"
          >
            <Button type="submit" _focus={{ shadow: '' }} fontWeight="md">
              Save
            </Button>
          </Box>
        </chakra.form>
      </Box>
    </Box>
  );
}
