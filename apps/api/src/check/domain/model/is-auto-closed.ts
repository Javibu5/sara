import { ValueObject } from "@sara/domain";

interface Props {
    value: boolean;
  }

export class isAutoClosed extends ValueObject<Props>{
  public static fromString(state: boolean): isAutoClosed{
    if (state === null){
      throw new Error('state cannot be null');
    }
    return new isAutoClosed({value :  state});
  }
}