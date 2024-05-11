type Props = {
  title: string;
};

const DashboardPageTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
    </div>
  );
};

export default DashboardPageTitle;
