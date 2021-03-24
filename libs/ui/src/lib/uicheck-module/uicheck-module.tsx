import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { CheckDto, UserDto } from '@sara/contracts';
import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';

import CheckButtonsGroup from '../check-buttons-group/check-buttons-group';
import GreetingsUser from '../greetings-user/greetings-user';
import LastChecks from '../last-checks/last-checks';
import Navbar from '../navbar/navbar';
import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface UIcheckModuleProps {
  working: boolean;
  date: Date;
  checks: CheckDto[];
  /* eslint-disable-next-line */
}

export function UIcheckModule(props: UIcheckModuleProps) {
  const [session, loading] = useSession();

  const classes = useStyles();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Grid container spacing={2} key={session.user.name} direction="column">
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <GreetingsUser
            username={session.user.name}
            working={props.working}
          ></GreetingsUser>
        </Grid>
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <CheckButtonsGroup working={props.working} />
        </Grid>
        <Grid item xs={12} justify="center" style={{ margin: 'auto' }}>
          <LastChecks
            checks={props.checks}
            date={new Date()}
            working={props.working}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default UIcheckModule;
