import {
  Stack,
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
import { CreditCardDto } from '@sara/contracts/credit-card';
import { ExpenseDto } from '@sara/contracts/expense';
import { useCreditCard, useExpenses } from '@sara/hooks';

import { WizardDocument } from '../..';

/* eslint-disable-next-line */
export interface ExpenseRowProps {
  expense: ExpenseDto;
}

const ExpenseRow: React.FunctionComponent<ExpenseRowProps> = ({ expense }) => {
  const { creditCard }: { creditCard: CreditCardDto } = useCreditCard(
    expense.creditCardId
  );
  if (creditCard) {
    return (
      <Tr>
        <Td>{expense.reason}</Td>
        <Td>{expense.status}</Td>
        <Td isNumeric>{expense.amount}</Td>
        <Td>{creditCard.creditCardNumber}</Td>
        <Td>
          <WizardDocument></WizardDocument>
        </Td>
      </Tr>
    );
  }
  return null;
};

export function ExpenseList() {
  const { expenses }: { expenses: ExpenseDto[] } = useExpenses();
  return (
    <Table variant="simple">
      <TableCaption>Lista de gastos</TableCaption>
      <Thead>
        <Tr>
          <Th>Concepto</Th>
          <Th>Estado</Th>
          <Th isNumeric>Cantidad</Th>
          <Th>Pagado con la tarjeta</Th>
          <Th>Documento</Th>
        </Tr>
      </Thead>
      <Tbody>
        {!expenses && (
          <Tr>
            <Td colSpan={4}>No hay gastos registrados</Td>
          </Tr>
        )}
        {expenses &&
          expenses.map((expense: ExpenseDto) => (
            <ExpenseRow expense={expense} />
          ))}
      </Tbody>
    </Table>
  );
}
export default ExpenseList;
