interface Props {
    name: string;
    description: string;
    deadline: Date;
    isDone: boolean;
}

export class EditProjectDto {
    name: string;
    description: string;
    deadline: Date;
    isDone: boolean;

    constructor(props: Partial<Props>) {
        Object.assign(this, props);
    }
}
