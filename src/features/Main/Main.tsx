import AppRoutes from "../AppRoutes/AppRoutes";
import React from "react";
import mainImage from '../../styles/mainPhoto.jpg';
import MainMenu from "../Menu/Menu";

export default function Main() {


    const id = '12s323';
    console.log(`view/${id}`);
    console.log('view/:id');

    return (
      <>
          <div className="main">
              <MainMenu />
              <AppRoutes />
              <img alt="" src={mainImage} width="400" height="400"/>
              <div> main info</div>
          </div>
      </>
    );
};