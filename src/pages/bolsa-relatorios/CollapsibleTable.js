import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 500,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 400,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 300,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Historico
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Data</TableCell>
                                        <TableCell align="right">Negociação</TableCell>
                                        <TableCell align="right">C/V</TableCell>
                                        <TableCell align="right">Tipo de mercado</TableCell>
                                        <TableCell align="right">Especificação do título</TableCell>
                                        <TableCell align="right">Quantidade</TableCell>
                                        <TableCell align="right">Preço</TableCell>
                                        <TableCell align="right">Valor Operação</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell align="left" component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            {/*<TableCell>{historyRow.customerId}</TableCell>*/}
                                            <TableCell align="right">{historyRow.negociacao}</TableCell>
                                            <TableCell align="right">{historyRow.debit_credit}</TableCell>
                                            <TableCell align="right">{historyRow.tipo_mercado}</TableCell>
                                            <TableCell align="right">{historyRow.titulo}</TableCell>
                                            <TableCell align="right">{historyRow.quantidade}</TableCell>
                                            <TableCell align="right">{historyRow.preco}</TableCell>
                                            <TableCell align="right">{historyRow.valor}</TableCell>
                                            {/*<TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>*/}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [
    createData('AMBEV S/A          ON', 1500, 14.66, 21990.0),
    createData('CIA HERING          ON NM', 1500, 14.66, 21990.0),
    createData('COSAN      ON NM', 1500, 14.66, 21990.0),
    createData('ELETROBRAS     PNB N1                           D', 1500, 14.66, 21990.0),
    createData('FLEURY     ON ED NM', 1500, 14.66, 21990.0),
    createData('PETROBRAS BR     ON NM', 1500, 14.66, 21990.0)
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Ativo</TableCell>
                        <TableCell align="right">Quantidade</TableCell>
                        <TableCell align="right">Preço médio</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
