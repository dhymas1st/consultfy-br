// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'offshore',
    title: 'Offshore',
    type: 'group',
    children: [
        {
            id: 'offshore-obrigacoes',
            title: 'Obrigações',
            type: 'item',
            url: '/offshore-obrigacoes',
            icon: icons.FontSizeOutlined,
            breadcrumbs: false
        },
        {
            id: 'offshore-relatorios',
            title: 'Relatórios',
            type: 'item',
            url: '/offshore-relatorios',
            icon: icons.BgColorsOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
