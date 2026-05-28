import image from "../../../public/favicon.ico";
import "./sidebar.css";

export default function Sidebar({}) {
    return (
        <aside className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__element sidebar__element--logo">
                    <img src={image} alt="" className="sidebar__icon sidebar__icon--logo" />
                    <div className="sidebar__hide">
                        <p className="sidebar__text">TuZonaTienda</p>
                    </div>
                </li>

                <li className="sidebar__element">
                    <i className="pi pi-cog sidebar__icon"></i>
                    <div className="sidebar__hide">
                        <p className="sidebar__text">Settings</p>
                    </div>
                </li>

                <li className="sidebar__element">
                    <i className="pi pi-users sidebar__icon"></i>
                    <div className="sidebar__hide">
                        <p className="sidebar__text">Users</p>
                    </div>
                </li>

                <li className="sidebar__element">
                    <i className="pi pi-shopping-cart sidebar__icon"></i>
                    <div className="sidebar__hide">
                        <p className="sidebar__text">Products</p>
                    </div>
                </li>


            </ul>
        </aside>
    )
}