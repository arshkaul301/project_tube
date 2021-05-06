import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import SideBarRow from './SideBarRow';
import SideStripRow from './SideStripRow';
import { Route, Link } from 'react-router-dom';
import '../css/SideBar.css';

export default function SideBar(props) {
    if (props.state) {
        return (
            <div className="SideBar">
                <div className="SideBar-Menu">
                    <SideBarRow icon={HomeIcon} title="Home" />
                    <SideBarRow icon={TrendingUpIcon} title="Trending" />
                    <SideBarRow icon={SubscriptionsIcon} title="Subscriptions" />
                    <SideBarRow icon={HistoryIcon} title="History" />
                </div>
                <hr className="SideBar-Hr-Start" />
                <div className="SideBar-SignIn"> Sign in to like videos, comment and subscribe
             <button className="SideBar-SignIn-Button"><AccountCircleIcon className="Header-UserIcon" />SIGN IN</button>
                </div>
                <hr className="SideBar-Hr-SignIn" />
                <div className="SideBar-Suggestions">
                    <div className="SideBar-Suggestions-Heading">
                        BEST OF PROJECTTUBE
                </div>
                    <div className="SideBar-Suggestions-Rows">
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />
                        <SideBarRow icon={HomeIcon} title="Machine learning" />


                    </div>
                </div>
                <hr className="SideBar-Hr-Suggestions" />
                <div className="SideBar-Browse">
                    <button className="SideBar-Browse-Button"><AddCircleIcon className="SideBar-Browse-Icon" /> Browse channels</button>
                </div>
                <hr className="SideBar-Hr-End" />
                <div className="SideBar-End">
                    <div className="SideBar-End-Links">
                        <Link to='/about' style={{ textDecorationLine: 'none', color: '#4C4B4B' }}>About</Link>
                        <Link to='/contact' style={{ textDecorationLine: 'none', color: '#4C4B4B' }}>Contact us</Link>
                        <Link to='/developers' style={{ textDecorationLine: 'none', color: '#4C4B4B' }}>Developers</Link>
                        <Route exact path="/about" />
                        <Route exact path="/contact" />
                        <Route exact path="/developers" />
                    </div>
                    <div className="SideBar-End-CopyRight">
                        <CopyrightIcon /> 2020 ProjectTube
              </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="SideStrip">
                <SideStripRow icon={HomeIcon} title="Home" />
                <SideStripRow icon={TrendingUpIcon} title="Trending" />
                <SideStripRow icon={SubscriptionsIcon} title="Subscriptions" />
                <SideStripRow icon={HistoryIcon} title="History" />
            </div>
        )
    }
}