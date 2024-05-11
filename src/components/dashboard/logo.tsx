import { Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold">
      <Package2 className="h-6 w-6" />
      <span className="">Working</span>
    </Link>
  );
};

export default Logo;
