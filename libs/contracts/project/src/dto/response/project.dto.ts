interface Props {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  isDone: boolean;
}

export class ProjectDto {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  isDone: boolean;

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
