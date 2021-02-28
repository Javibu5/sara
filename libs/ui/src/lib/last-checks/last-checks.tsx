import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { CheckDto } from '@sara/contracts';
import React from 'react';

import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface LastChecksProps {
  date: Date;
  checks: CheckDto[];
  working: boolean;
}

interface PrintCheckProps {
  id: string;
  inAt: Date;
  outAt: Date;
}

const PrintCheck: React.FunctionComponent<PrintCheckProps> = ({
  id,
  inAt,
  outAt,
}) => (
  <ListItem key={id}>
    Entrada: {inAt ? `${inAt.getHours()}:${inAt.getMinutes()}` : 'pendiente'}
    &nbsp;|&nbsp;Salida:{' '}
    {outAt ? `${outAt.getHours()}:${outAt.getMinutes()}` : 'pendiente'}
  </ListItem>
);

export function LastChecks(props: LastChecksProps) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography component="h2">{props.date.toLocaleString()}</Typography>

        {props.working && (
          <Alert variant="outlined" severity="warning">
            Tienes una ticaje abierto
          </Alert>
        )}

        <Divider className={classes.divider} />

        <List>
          {!props.checks.length && <ListItem>No hay ticajes</ListItem>}
          {props.checks.map((check: CheckDto) => (
            <PrintCheck id={check.id} inAt={check.inAt} outAt={check.outAt} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default LastChecks;
