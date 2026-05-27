import type { MouseEventHandler } from "react";

export default function Card({ children, onClick = () => void 0, style = {}, className = "" }: { className:string, children: React.ReactNode, onClick: MouseEventHandler, style: {} }) {
    return (
        <div className={"bg-white rounded-lg shadow-md p-6 "+className} onClick={onClick} style={style}>
            {children}
        </div>
    );
}