import { Box, Container } from '@material-ui/core';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import { CheckDto } from '../../../libs/contracts/src';
import { Layout, UIcheckModule } from '../../../libs/ui/src';
import { useChecks, useUser, useTodayChecks } from '../hooks/useSWR';

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

  useEffect(() => {
    setTodaysDate(new Date());

    const lastTodayCheck = todayChecks[todayChecks.length - 1];
    setIsWorking(lastTodayCheck.outAt === null);
  }, [todayChecks]);

  return (
    <Layout session={session}>
      <Container maxWidth="sm">
        <Box my={4}></Box>
        <UIcheckModule
          userDto={session.user}
          working={isWorking}
          date={todaysDate}
          checks={todayChecks}
          onCheckInHandler={'sad'}
          onCheckOuthandler={'asda'}
        ></UIcheckModule>
      </Container>
    </Layout>
  );
}
