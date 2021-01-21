import { ValueObject } from "@sara/domain";


interface Props {
    value: Date;
}

export class inAt extends ValueObject<Props>{
    public static fromString(date: Date): inAt{
       if (date === null) {
            throw new Error('Invalid name');
        }
        return new inAt({ value: date})
    } 
    get value(): string {

        return this.props.value.toDateString();
      }
}