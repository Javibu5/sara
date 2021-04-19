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
    <div>
      <Grid container>
        <Grid>
          <Typography component="h1" variant="h6" style={{ color: 'white' }}>
            {' '}
            ¡Hola {props.username}!
          </Typography>{' '}
        </Grid>
        <Grid>
          <AdjustIcon style={props.working ? { color: green[500] } : {}}>
            {' '}
            AdjustIcon{' '}
          </AdjustIcon>
        </Grid>
      </Grid>
    </div>
  );
}

export default GreetingsUser;
