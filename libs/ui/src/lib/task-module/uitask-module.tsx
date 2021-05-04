import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from '../theme';
import EmployeeTask from './employee-task/employee-task';

export interface UItaskModuleProps {
  tasks: any;
}

export function UItaskModule(props: UItaskModuleProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <Typography style={{ color: 'white' }}> Tareas </Typography>
      </Grid>
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <EmployeeTask tasks={props.tasks}></EmployeeTask>
      </Grid>
    </Grid>
  );
}

export default UItaskModule;
