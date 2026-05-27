import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "~/context/app.context";

export default function Breadcrumbs({  }) {
    const navigate = useNavigate();
    const context = useContext(AppContext);
    const { breadcrumbs: items, setBreadcrumbs } = context;
    return (
        <nav>
            <ul className="flex space-x-2 text-sm text-gray-500 px-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-primary hover:underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(item.href!);
                                }}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span>{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <span className="mx-2 text-gray-400">/</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}