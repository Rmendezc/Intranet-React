import React from "react";
import {SidebarData} from './SidebarData'
import {SubMenu} from './SubMenu'
import './Sidebar.css';


function Sidebar (){
    return( 
        <div className="Sidebar">

            <ul className="SidebarList">
            {SidebarData.map((val,key) => {
            return (
            <li key={key} className="row" 
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={()=> {window.location.pathname = val.link}}>
                {" "}
                <div id="icon" >{val.icon}</div> {" "}
                <div id="title">
                    {val.title}
                </div>
            </li>
            );
    })} 
    </ul>
    {/* <SubMenu item={item} key={index} /> */}

    </div>
    );


}

export default Sidebar;

  