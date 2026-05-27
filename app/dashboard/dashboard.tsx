import AppFrame from '~/components/common/app-frame';
import DashboardCard from '~/components/dashboard-card';

const dashboardOptions = [
    {
        title: 'Configuración',
        description: 'Ajustes del sistema',
        icon: 'pi pi-user',
        action: () => console.log('soy el card de configuracion'),
    }
];

export default function Dashboard() {
    return (
        <AppFrame>
            <div className="flex gap-6 flex-wrap">
                {dashboardOptions.map((option, index) => (
                    <DashboardCard
                        key={index}
                        title={option.title}
                        icon={option.icon}
                        description={option.description}
                        action={option.action}
                    />
                ))}
            </div>
        </AppFrame>
    );
}
