import React, { useContext } from 'react';
import { Chart } from 'primereact/chart';
import './Logo.css';
import IdiomaContext from '../../context/idiomaContext/idiomaContext';

export default function Logo(props) {

    const idCt = useContext(IdiomaContext);

        const optionsO = {
            title: {
                display: false
            },
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        const dataOGrande = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [200, 70, 100],
                    backgroundColor: [
                        "#e60000",
                        "#cca300",
                        "#0000ff"
                    ],
                    hoverBackgroundColor: [
                        "#e60000",
                        "#cca300",
                        "#0000ff"
                    ]
                }]
        };        

        return (
            <div>
                <div className="logo1">
                    <Chart style={{marginTop: '-16px'}} width="40px" height="40px" type="doughnut" data={dataOGrande} options={optionsO} />
                    <span className="FonteLogo">{idCt.t("bservatório", "bservatory")}</span>                    
                    <span className="FonteLogo"> <strong>IFTM</strong></span>
                </div>
            </div>
        );
    
}