import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
