import DashboardPageTitle from '@/components/dashboard/dashboard-page-title';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <DashboardPageTitle title="Home" />
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">You have no products</h3>
          <p className="text-sm text-muted-foreground">You can start selling as soon as you add a product.</p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;