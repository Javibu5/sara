import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: number;
}

export class ExpenseAmount extends ValueObject<Props> {
  public static fromString(value: number) {
    if (!Number.isInteger(value) || !(value > 0)) {
      throw new Error('Not valid amount for an expense');
    }

    return new ExpenseAmount({ value });
  }

  get value(): number {
    return this.props.value;
  }
}
