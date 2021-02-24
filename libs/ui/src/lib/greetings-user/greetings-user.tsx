import { Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AdjustIcon from '@material-ui/icons/Adjust';
import React from 'react';

import { useStyles } from '../theme';


/* eslint-disable-next-line */
export interface GreetingsUserProps {
  username: string,
  working: boolean,
}

export function GreetingsUser(props: GreetingsUserProps) {
  const classes = useStyles();
  return (
    <div>
      <Typography
        component="h1"
        variant="h6"
      > ¡Hola {props.username}!
      </Typography> <AdjustIcon style={props.working ? { color: green[500] } : {}} > AdjustIcon </AdjustIcon>

    </div>
  );
}

export default GreetingsUser;
