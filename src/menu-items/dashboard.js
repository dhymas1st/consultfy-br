// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'assistente-virtual',
            title: 'Assistente Virtual',
            type: 'item',
            url: '/assistente-virtual',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'resumo',
            title: 'Resumo',
            type: 'item',
            url: '/resumo',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'meus-ativos',
            title: 'Meus Ativos',
            type: 'item',
            url: '/meus-ativos',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
