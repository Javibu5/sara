import { CircularProgress, Grid } from '@material-ui/core';
import { CheckDto, UserDto } from '@sara/contracts';
import { useSession } from 'next-auth/client';
import { Session } from 'node:inspector';
import React, { useEffect } from 'react';

import { CheckButtonsGroup, GreetingsUser, LastChecks } from '../check-module';
import Navbar from '../navbar/navbar';
import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface UIcheckModuleProps {
  working: boolean;
  date: Date;
  checks: CheckDto[];
  /* eslint-disable-next-line */
  session: Session;
}

export function UIcheckModule(props: UIcheckModuleProps) {
  const [session, loading] = useSession();

  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      key={session.user.name}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <GreetingsUser
          username={session.user.name}
          working={props.working}
        ></GreetingsUser>
      </Grid>
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <CheckButtonsGroup working={props.working} />
      </Grid>
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <LastChecks
          checks={props.checks}
          date={new Date()}
          working={props.working}
        />
      </Grid>
    </Grid>
  );
}

export default UIcheckModule;
