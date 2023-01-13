import React from 'react';
import Courceslang from './charts/Courceslang';
import Numberofcourse from './charts/Numberofcourse';
import Piechart from './charts/Piechart';
import Scatter from './charts/Scatter';
import StudentTeacher from './charts/StudentTeacher';
import Studentsarea from './charts/Studentsarea';
import Teachersarea from './charts/Teachersarea';
import Teachpie from './charts/Teachpie';
import Teachscatter from './charts/Teachscatter';
import StuTeach from './charts/StuTeach';
import StuLearn from './charts/StuLearn';
import logo from '../images/feature_1.png';
import logo1 from '../images/feature_3.png';


const Statistics = () => {
    return (
        <div id='statistics'>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>Statistics</h1>
            <StudentTeacher />
            <img src={logo} className="stu-image"></img>
            <p className='ack'><b>Current Site Activity</b></p>
            <StuTeach />
            <Numberofcourse />
            <Courceslang />
            <Piechart />
            <img src={logo1} className="stu-image"></img>
            <StuLearn />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Scatter />
            <br></br>
            <p className='ack'><b>Students From Different Regions Of World</b></p>
            <Studentsarea />
            <Teachpie />
            <Teachscatter />
            <br></br>
            <p className='ack'><b>Teachers From Different Regions Of World</b></p>
            <Teachersarea />
        </div>
    );
}

export default Statistics;