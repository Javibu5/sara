import { CircularProgress, Grid } from '@material-ui/core';
import { useTodayChecks, useUser } from '@sara/hooks';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

import { CheckButtonsGroup, GreetingsUser, LastChecks } from '../check-module';
import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface UIcheckModuleProps {}

export function UIcheckModule(props: UIcheckModuleProps) {
  const [session, loading] = useSession();
  const classes = useStyles();
  const {
    todayChecks,
    isLoadingTodayChecks,
    isErrorTodayChecks,
  } = useTodayChecks();
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [isWorking, setIsWorking] = useState(false);
  /* sustituir esta logica por un hook para  y que te devuelva el isworking*/
  /*¿se actualizaria entonces el punto verde cada vez que pulso un boton de entrada o salida?*/
  useEffect(() => {
    setTodaysDate(new Date());
    if (todayChecks && todayChecks.length !== 0) {
      const lastTodayCheck = todayChecks[0];
      setIsWorking(lastTodayCheck.outAt === null);
    }
  }, [todayChecks]);

  if (loading || isLoadingTodayChecks) {
    return <CircularProgress />;
  }

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <GreetingsUser
          username={session.user.name}
          working={isWorking}
        ></GreetingsUser>
      </Grid>
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <CheckButtonsGroup working={isWorking} />
      </Grid>
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <LastChecks
          checks={todayChecks}
          date={new Date()}
          working={isWorking}
        />
      </Grid>
    </Grid>
  );
}

export default UIcheckModule;
