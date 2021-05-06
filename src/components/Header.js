import { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TranslateIcon from '@material-ui/icons/Translate';
import OptionRow from './OptionRow';
import Logo from '../images/logo.png'
import { Search } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';

export default function Header(props) {
    const [searchOn, changeSearch] = useState(false);
    const [options, changeOptions] = useState(false);
    const optionButton = useRef(null);
    let widthHeader = (window.innerWidth <= 650);

    const toggleOptions = () => {
        changeOptions(!options);
    }
    const removeSideBar = () => {
        props.toggle(!props.state);
    }
    const search1 = () => {
        changeSearch(!searchOn);
    }
    const updateHeader = () => {
        if (window.innerWidth < 650) {
            widthHeader = true;
        }
        else {
            widthHeader = false;
            changeSearch(false);
        }
    }
    const handleClickOutside = event => {
        if (optionButton.current && !optionButton.current.contains(event.target)) {
            changeOptions(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', updateHeader);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('resize', updateHeader);
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);
    return (
        <div className="Header">
            <div className={(!searchOn) ? 'Header1' : 'Header-Off'}>
                <div className="Header-Start">
                    <IconButton className="Header-SideBar" onClick={removeSideBar}> <MenuIcon /> </IconButton>
                    <img className="Header-Logo" src={Logo}></img>
                </div>
                <div className="Header-Middle">
                    <input type="text" placeholder="Search" />
                    <button className="Header-SearchIcon"><SearchIcon onClick={widthHeader ? search1 : search1} /></button>
                </div>
                <div className="Header-End">
                    <div className="Header-Options-Start">
                    <IconButton className="Header-Options" ref={optionButton} onClick={toggleOptions}><MoreVertIcon /></IconButton>
                    {options 
                    ? <div className="Header-Options-Dropdown">
                       <OptionRow icon1={Brightness4Icon} icon2={ArrowForwardIosIcon} title="Appearance: Device theme" />
                       <OptionRow icon1={TranslateIcon} icon2={ArrowForwardIosIcon} title="Language: English (India)"/>
                    </div> 
                    : null}
                    </div> 
                    <button className="Header-SignIn"><AccountCircleIcon className="Header-UserIcon" />SIGN IN</button>
                </div>
            </div>
            <div className={((searchOn) && (widthHeader)) ? `Header2-On` : `Header-Off`}>
                <IconButton className="Header-Back" onClick={search1}><ArrowBackIcon /></IconButton>
                <div className="Header-Input">
                    <input type="text" placeholder="Search" />
                    <button className="Header-SearchIcon-Small"><SearchIcon /></button>
                </div>
            </div>
        </div>
    )
}
