import React from 'react';
import TeacherRev from './revcharts/TeacherRev';
import CompanyRev from './revcharts/CompanyRev';
import logo from '../images/feature_2.png';


const RevenueStatistics = () => {
    return (
        <div id='revenue'>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>Revenue Statistics</h1>
            <img src={logo} className="stu-image"></img>
            <TeacherRev />
            <CompanyRev />
        </div>
    )
}

export default RevenueStatistics;