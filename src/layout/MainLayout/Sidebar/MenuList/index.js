import { useSelector } from 'react-redux';

// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { IconPalette } from '@tabler/icons';
import dashboard from 'menu-items/dashboard';
// ==============================|| SIDEBAR MENU LIST ||============================== //
const customMenus = [];

const MenuList = () => {

    const menus = useSelector((state) => state.user.user?.metadata);
    
    if(customMenus.length == 0){
        if(menus && menus.length > 0){
            menus.map((item) => {
                if(item.status === "active"){
                    customMenus.push({
                        id: `${item.id}_${item.componentName}`,
                        title: item.displayName,
                        type: 'item',
                        url: `/${item.componentName}`,
                        icon: IconPalette,
                        breadcrumbs: false
                    });
                }
            });
        }
    
        menuItem.items.push({
            id: "custom",
            title: "",
            type: "group",
            children: customMenus
        });
    }
    
    const navItems = menuItem.items.map((item) => {
        console.log(item);
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error 22
                    </Typography>
                );
        }
    });


    return <>{navItems}</>;
};

export default MenuList;
