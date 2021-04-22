import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

import { useStyles } from '../theme';

/* eslint-disable-next-line */
export interface EmployeeDocumentsProps {
  documents: any;
}

const rows = [createData('001', 'Tarea', 'ver', 'descargar')];

function createData(
  name: string,
  type: string,
  viewDocument: string,
  downloadDocument: string
) {
  return { name, type, viewDocument, downloadDocument };
}

export function EmployeeDocuments(props: EmployeeDocumentsProps) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre de documento</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Ver&nbsp;Documento</TableCell>
            <TableCell align="right">Descargar&nbsp;Documento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.viewDocument}</TableCell>
              <TableCell align="right">{row.downloadDocument}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeDocuments;
