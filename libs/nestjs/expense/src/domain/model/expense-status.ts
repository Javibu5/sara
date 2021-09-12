import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: 'deleted' | 'pending' | 'done';
}

export class ExpenseStatus extends ValueObject<Props> {
  public static fromString(value: string): ExpenseStatus {
    if (value !== 'deleted' && value !== 'pending' && value !== 'done') {
      throw new Error('Wrong type of status');
    }

    return new ExpenseStatus({ value });
  }
}
