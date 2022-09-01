import Axios from 'axios';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState, useEffect } from 'react';
import { DataGridPro, GridColDef, GridToolbar, ptBR } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license-pro';
import CollapsibleTable from './CollapsibleTable';
import axios from '../../../node_modules/axios/index';

LicenseInfo.setLicenseKey('f88f009b072cafbc44cd21b892432a8cTz00NjIwNCxFPTE2ODc2MTgyMDc3ODgsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const columnsVrMean = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'paper',
        headerName: 'Empresa',
        width: 150,
        editable: true
    },
    {
        field: 'quantity',
        headerName: 'Quantidade',
        type: 'number',
        width: 150,
        editable: true
    },
    {
        field: 'vlr_unit',
        headerName: 'Valor Unitário',
        type: 'number',
        width: 110,
        editable: true
    },

    {
        field: 'price',
        headerName: 'Total',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'emolumnts',
        headerName: 'Emolumentos',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'taxes',
        headerName: 'Taxas',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'total_taxes',
        headerName: 'Total de Taxas',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_liquid',
        headerName: 'Taxa Liquida',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_operation',
        headerName: 'Taxa de Operação',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_reg',
        headerName: 'Taxa de Registro',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'others',
        headerName: 'Outros',
        type: 'number',
        width: 110,
        editable: true
    }
];

const rowsVrConference = [
    {
        id: '1',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '2',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '4.164,00',
        quantity: '300',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.14',
        others: '0.83',
        taxes: '2.28',
        total_taxes: '25.79',
        tx_liquid: '1.14',
        tx_operation: '21.39',
        tx_reg: '0.00'
    },
    {
        id: '3',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '4',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '9.716,00',
        quantity: '700',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.32',
        others: '1.95',
        taxes: '5.33',
        total_taxes: '60.18',
        tx_liquid: '2.67',
        tx_operation: '49.92',
        tx_reg: '0.00'
    },
    {
        id: '5',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '6',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '7',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '8',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '5.552,00',
        quantity: '400',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.18',
        others: '1.11',
        taxes: '3.05',
        total_taxes: '34.39',
        tx_liquid: '1.53',
        tx_operation: '28.53',
        tx_reg: '0.00'
    },
    {
        id: '9',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: 10,
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BRASILON NM',
        price: '3.903,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 39.03,
        emolumnts: '0.13',
        others: '0.78',
        taxes: '2.14',
        total_taxes: '24.18',
        tx_liquid: '1.07',
        tx_operation: '20.05',
        tx_reg: '0.00'
    },
    {
        id: 11,
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BRASILON NM',
        price: '23.418,00',
        quantity: '600',
        type_operation: 'C',
        vlr_unit: 39.03,
        emolumnts: '0.76',
        others: '4.69',
        taxes: '12.85',
        total_taxes: '145.06',
        tx_liquid: '6.44',
        tx_operation: '120.32',
        tx_reg: '0.00'
    }
];

// {
//   "id": 6393,
//   "operations": [
//     {
//       "date": "10/03/2020",
//       "number_leaf": "19794916 1",
//       "paper": "VISTA BRASILON NM",
//       "price": "3.903,00",
//       "quantity": "100",
//       "type_operation": "C",
//       "vlr_unit": 39.03
//     },
//     {
//       "date": "10/03/2020",
//       "number_leaf": "19794916 1",
//       "paper": "VISTA BRASILON NM",
//       "price": "23.418,00",
//       "quantity": "600",
//       "type_operation": "C",
//       "vlr_unit": 39.03
//     }
//   ],
//   "paper": "VISTA BRASILON NM",
//   "quantity": 700,
//   "total": "27321.00",
//   "vr_medio": "39.03"
// },

const rowsVrMean = [
    {
        id: 2185,
        operations: [
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '4.164,00',
                quantity: '300',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '9.716,00',
                quantity: '700',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '5.552,00',
                quantity: '400',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            }
        ],
        paper: 'VISTA BR MALLS PARON NM',
        quantity: 2000,
        total: '27760.00',
        vr_medio: '13.88'
    }
];

export const TabsMenu = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        Axios.get('http://15.228.251.22:3000/geOperacoesbyClient').then((res) => console.log(res));
    }, []);
    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label="Tabs" onChange={handleChange} centered>
                        <Tab label="Resumo financeiro" value="1" />
                        <Tab label="Ganho de Capital" value="2" />
                        <Tab label="Imposto de Renda Anual" value="3" />
                        <Tab label="Custo Médio de Ações" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box sx={{ height: 500, width: '100%' }}>
                        <DataGridPro
                            rows={rowsVrConference}
                            columns={columnsVrMean}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </TabPanel>
                <TabPanel value="2">Ganho de Capital</TabPanel>
                <TabPanel value="3">Imposto de Renda Anual</TabPanel>
                <TabPanel value="4">
                    <CollapsibleTable />
                </TabPanel>
            </TabContext>
        </Box>
    );
};
