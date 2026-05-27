import Card from "./common/card";

type DashboardCardProps = {
    title: string;
    description: string;
    icon: string;
    action: () => void;
}

export default function DashboardCard({ title, description, icon, action }: DashboardCardProps) {

    return (
        <Card onClick={action} style={{ width:"16em" }} className="flex-col items-center justify-center cursor-pointer">
            <h3 className="text-lg font-bold text-center text-blue-300 cursor-pointer">{title}</h3>
            <span style={{ width: "100%", height: "200px", fontSize: "10em", margin:"auto 0" }} className=" cursor-pointer flex items-center justify-center">
                <i className={icon}></i>
            </span>
            <span className="text-center cursor-pointer">
                {description}
            </span>
        </Card>
    )

}