import { Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface GreetingsUserProps {
  username: string,
}

export function GreetingsUser(props: GreetingsUserProps) {
  const classes = useStyles();
  return (
    <div>
      <Typography
        component="h1"
        variant="h6"
      >
        {props.username}
      </Typography>
    </div>
  );
}

export default GreetingsUser;
