import '../css/OptionRow.css';

export default function OptionRow(props){
    return (
        <div className="Header-Options-Dropdown-Content">
        {<props.icon1 className="Header-Options-Dropdown-Content-Icon1"/>}
        <div className="Header-Options-Dropdown-Content-Title">
            {props.title}
        </div>
        {<props.icon2 className="Header-Options-Dropdown-Content-Icon2"/>}
    </div>
    )
}