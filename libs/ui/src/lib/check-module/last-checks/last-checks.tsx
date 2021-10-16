import {
  Alert,
  Box,
  Divider,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckDto } from '@sara/contracts/check';
import React, { useEffect, useState } from 'react';

import { useStyles } from '../../theme';

/* eslint-disable-next-line */
export interface LastChecksProps {
  date: Date;
  checks: CheckDto[];
  working: boolean;
}

interface PrintCheckProps {
  id: string;
  inAt: Date;
  outAt: Date;
}

const PrintCheck: React.FunctionComponent<PrintCheckProps> = ({
  id,
  inAt,
  outAt,
}) => {
  return (
    <Tr>
      <Td key={id}>
        Entrada:{' '}
        {inAt
          ? `${new Date(inAt).getHours()}:${new Date(inAt).getMinutes()}`
          : 'pendiente'}
      </Td>
      <Td>
        Salida:{' '}
        {outAt
          ? `${new Date(outAt).getHours()}:${new Date(outAt).getMinutes()}`
          : 'pendiente'}
      </Td>
    </Tr>
  );
};

export function LastChecks(props: LastChecksProps) {
  const classes = useStyles();
  const [clockState, setClockState] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleString());
    }, 1000);
  }, []);
  console.debug('props', props);

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth="2px"
      borderRadius="lg"
      overflow="visible"
    >
      <Table variant="simple">
        <TableCaption placement="top">Fecha : {clockState}</TableCaption>
        <TableCaption placement="top">
          {' '}
          {props.working && (
            <Alert status="warning">Tienes un ticaje abierto</Alert>
          )}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Entradas</Th>
            <Th>Salidas</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!props.checks && <Td>No hay ticajes</Td>}
          {props.checks &&
            props.checks.map((check: CheckDto) => (
              <PrintCheck
                id={check._id}
                inAt={check.inAt}
                outAt={check.outAt}
              />
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default LastChecks;
