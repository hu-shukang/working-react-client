import { Home, LineChart, LucideProps, Package, ShoppingCart, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ForwardRefExoticComponent, RefAttributes, useEffect, useState } from 'react';

const items: MenuItemProps[] = [
  {
    id: 'home',
    text: 'Home',
    icon: Home,
    to: '/home',
    active: false
  },
  {
    id: 'orders',
    text: 'Orders',
    icon: ShoppingCart,
    to: '/orders',
    active: false
  },
  {
    id: 'products',
    text: 'Products',
    icon: Package,
    to: '/products',
    active: false
  },
  {
    id: 'customers',
    text: 'Customers',
    icon: Users,
    to: '/customers',
    active: false
  },
  {
    id: 'analytics',
    text: 'Analytics',
    icon: LineChart,
    to: '/analytics',
    active: false
  }
];

type MenuItemProps = {
  id: string;
  text: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  to: string;
  active: boolean;
};

const MenuItem = ({ to, text, icon: Icon, active }: MenuItemProps) => {
  return (
    <Link
      to={to}
      className={
        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ` +
        (active ? `text-primary bg-muted` : 'text-muted-foreground')
      }
    >
      <Icon className="h-4 w-4" />
      {text}
    </Link>
  );
};

const SideMenu = () => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    const path = location.pathname.substring(1);
    const activeItem = items.find((item) => path.startsWith(item.id)) ?? items[0];
    setActiveId(() => activeItem.id);
  }, [location]);

  return (
    <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
      {items.map((item) => (
        <MenuItem key={item.id} {...item} active={item.id === activeId} />
      ))}
    </nav>
  );
};

export default SideMenu;
