import { Text, useColorMode } from '@chakra-ui/react';
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

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Text
          fontSize="4xl"
          variant="h6"
          style={{ color: isDark ? 'white' : 'black' }}
        >
          {' '}
          ¡Hola {props.username}!
        </Text>{' '}
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
