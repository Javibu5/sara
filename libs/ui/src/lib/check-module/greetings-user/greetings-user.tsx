import { Grid, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AdjustIcon from '@material-ui/icons/Adjust';
import React from 'react';

import { useStyles } from '../../theme';

export interface GreetingsUserProps {
  username: string;
  working: boolean;
}

export function GreetingsUser(props: GreetingsUserProps) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography component="h1" variant="h6" style={{ color: 'white' }}>
          {' '}
          ¡Hola {props.username}!
        </Typography>{' '}
      </Grid>
      <Grid item>
        <AdjustIcon style={props.working ? { color: green[500] } : {}}>
          {' '}
          AdjustIcon{' '}
        </AdjustIcon>
      </Grid>
    </Grid>
  );
}

export default GreetingsUser;
