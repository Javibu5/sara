interface Props {
  id: string;
  name: string;
  projecId: string;
  isFinished: boolean;
  employeeId: string[];
}

export class TaskDto {
  public readonly id: string;
  public readonly name: string;
  public readonly projecId: string;
  public readonly isFinished: boolean;
  public readonly employeeId: string[];

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
