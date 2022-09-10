import '../../styles/styles.scss';
import React from "react";

export default function Header() {
    return (
        <>
         <div className="header">
             {/*<div className="header-image">*/}
             {/*    <img alt="" src={headerImage} width="116" height="180"/>*/}
             {/*</div>*/}
             <div className="header-title">
                 <div>
                     OLEH YERMAKOV
                 </div>
                 <div>
                     The best physicist in the world
                 </div>
             </div>
         </div>
        </>
    );
};