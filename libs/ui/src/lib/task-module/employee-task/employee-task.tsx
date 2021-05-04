import {
  Button,
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { useStyles } from '../../theme';
import { UploadDocumentWizard } from '../../wizard-upload-document/wizard-upload-document';

/* eslint-disable-next-line */
export interface EmployeeTaskProps {
  tasks: any;
}

export interface PrintTaskProps {
  id: string;
  name: string;
  cluster: string;
  isFinished: boolean;
}

const PrintTask: React.FunctionComponent<PrintTaskProps> = ({
  id,
  name,
  cluster,
  isFinished,
}) => {
  const [checked, setChecked] = React.useState(true);
  const [isFinishedTask, setisFinishedTask] = React.useState(isFinished);


  const [open, setOpen] = React.useState(false);

  const handleClickOpenWizard = () => {
    setOpen(true);
  };

  const handleCloseWizard = () => {
    setOpen(false);
  };

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
    setisFinishedTask(!isFinished);
  };

  return (
    <ListItem key={id}>
      <Typography component="h2">
        {name} - {cluster ? `CL ${cluster}` : 'No hay tareas'}
      </Typography>
      <Checkbox
        checked={checked}
        onChange={handleChangeCheckBox}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      ></Checkbox>

      <Button onClick={handleClickOpenWizard}>
        <Typography>Subir archivo</Typography>
      </Button>
      <UploadDocumentWizard open={open} onClose={handleCloseWizard}> </UploadDocumentWizard>
    </ListItem>
  );
};

export function EmployeeTask(props: EmployeeTaskProps) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <List>
          {!props.tasks && (
            <ListItem>
              <Typography variant="body1">No hay tareas </Typography>
            </ListItem>
          )}
          {props.tasks &&
            props.tasks.map((task: any /*sustituir por taskDTO*/) => (
              <PrintTask
                id={task.id}
                name={task.name}
                cluster={task.cluster}
                isFinished={task.isFinished}
              />
            ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default EmployeeTask;
