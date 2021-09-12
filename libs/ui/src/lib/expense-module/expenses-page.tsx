import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { useStyles } from '../theme';

export interface Expense {
  expense: ExpenseDto;
}

export interface ExpensesPageProps {
  expense: Expense[];
}

export function ExpensesPage(props: ExpensesPageProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} style={{ margin: 'auto' }}>
        <Typography>Gastos</Typography>
      </Grid>

      <Grid item xs={12} style={{ margin: 'auto' }}>
        <Button>Registrar gasto</Button>
        <Grid item xs={12} style={{ margin: 'auto' }}>
          <Card style={{ width: '100%' }}>
            <CardContent>
              <List className={classes.listRoot}></List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExpensesPage;
