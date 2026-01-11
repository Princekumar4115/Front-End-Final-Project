import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { SalesPerformanceWidget } from '@/components/organisms/SalesPerformanceWidget';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4">
        <SalesPerformanceWidget />
      </div>
    </DashboardLayout>
  );
}
