import { ValueObject } from "@sara/domain";


interface Props {
    value: Date;
}

export class outAt extends ValueObject<Props>{
    public static fromString(date: Date): outAt{
       if (date === null) {
            throw new Error('Invalid name');
        }
        return new outAt({ value: date})
    } 
    get value(): string {

        return this.props.value.toDateString();
      }
}