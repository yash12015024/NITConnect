import React from 'react'
import "./css/SidebarOptions.css"
import { Add } from "@material-ui/icons";

function SidebarOptions() {
    return (
        <div className='sidebarOptions'>
            <div className='sidebarOption'>
                <img src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3ljREaK2ryJgKrCjCQDvAh/49fc4cf610a35cd61c7fbcd335863dba/GettyImages-1340008432.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=80">Business Administration</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://www.openaccessgovernment.org/wp-content/uploads/2019/04/dreamstime_s_126032651.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=86">Chemistry</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://img.freepik.com/premium-photo/innovative-architecture-civil-engineering-plan_31965-5441.jpg?w=360' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=48">Civil Engineering</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://www.univariety.com/uploads/career/images/big_thumb/c112ab08_rszcomputerall.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=82">Computer Application</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://cdn.mos.cms.futurecdn.net/Po8boBSzfQifAxkbgftCLV.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=46">Computer Engineering</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://149962286.v2.pressablecdn.com/wp-content/uploads/321233/shutterstock_1709519638.500x0-is.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=76">Electrical Engineering</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://images.shiksha.com/mediadata/images/articles/1566208909phpR7Xd7A.jpeg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=78">Electronics & Communication Engineering</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://images.theconversation.com/files/234318/original/file-20180830-195319-o6es3w.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=90">Humanities & Social Sciences</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://images.shiksha.com/mediadata/images/articles/1647333383phpk12vQF.jpeg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=88">Mathematics</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://gps.uml.edu/images/2015/programs/online-mechanical-engineering-technology-bachelor-image.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=72">Mechanical Engineering</a>
            </div>
            <div className='sidebarOption'>
                <img src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_22/2451826/180601-atomi-mn-1540.jpg' alt='logo' />
                <a href="https://nitkkr.ac.in/?page_id=84">Physics</a>
            </div>
            <div className="sidebarOption">
                <Add />
                <p className="text">Discover Spaces</p>
            </div>
        </div>
    );
}

export default SidebarOptions;
