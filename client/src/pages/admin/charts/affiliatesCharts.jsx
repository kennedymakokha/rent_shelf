import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useFetchaffiliatesQuery } from '../../../features/slices/usersApiSlice';
import { HandleConsole } from '../../../utils/selectFromapi';
import Loader from '../../../containers/layout/admin/Loader';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function affiliatesCharts() {
    const { data, refetch, isSuccess } = useFetchaffiliatesQuery()

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: "Affiliates Referals "
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: data
        }]
    }

    return (
        <>
            {!isSuccess ? <div className='w-[100%] h-[300px] flex items-center justify-center shadow-md'>
                <Loader />
            </div> : <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                containerProps={{ width: '100%', height: '300px' }}
            />}
        </>
    )
}

export default affiliatesCharts
