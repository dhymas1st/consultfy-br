// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'bolsa-de-valores',
    title: 'Bolsa de Valores',
    type: 'group',
    children: [
        {
            id: 'bolsa-de-valores-obrigacoes',
            title: 'Obrigações',
            type: 'item',
            url: '/bolsa-de-valores-obrigacoes',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        },
        {
            id: 'bolsa-de-valores-relatorios',
            title: 'Relatórios',
            type: 'item',
            url: '/bolsa-de-valores-relatorios',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

export default pages;
