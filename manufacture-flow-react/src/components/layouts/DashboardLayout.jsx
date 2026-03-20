
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="bg-white flex flex-col overflow-y-auto min-h-screen">
      <MainHeader />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 w-full max-w-350 mx-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
      <MainFooter />
    </div>
  );
}
