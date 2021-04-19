import { Box, Container } from '@material-ui/core';
import { useTodayChecks, useUser } from '@sara/hooks';
import { Layout, UIcheckModule } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

export default function Check() {
  const [session, loading] = useSession();
  const {
    todayChecks,
    isLoadingTodayChecks,
    isErrorTodayChecks,
  } = useTodayChecks();
  const { user, isLoadingUser, isErrorUser } = useUser();
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [isWorking, setIsWorking] = useState(false);
  /* sustituir esta logica por un hook para  y que te devuelva el isworking*/
  /*¿se actualizaria entonces el punto verde cada vez que pulso un boton de entrada o salida?*/
  useEffect(() => {
    setTodaysDate(new Date());
    if (todayChecks && todayChecks.length !== 0) {
      const lastTodayCheck = todayChecks[todayChecks.length - 1];
      setIsWorking(lastTodayCheck.outAt === null);
    }
  }, [todayChecks]);

  return (
    <Layout session={session}>
      <UIcheckModule
        working={isWorking}
        date={todaysDate}
        checks={todayChecks}
      ></UIcheckModule>
    </Layout>
  );
}
