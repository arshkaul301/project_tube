import '../css/SideBarRow.css';
import MouseTooltip from 'react-sticky-mouse-tooltip';

export default function SideBarRow(props) {
    return (
        <div className="SideBarRow">
            {<props.icon className="SideBarIcon" />}
            <div className="SideBarTitle">{props.title}
            </div>
            <MouseTooltip
                visible={true}
                offsetX={15}
                offsetY={10}
            >
                <span className="SideBarRow-Tooltip">{props.title}</span>
            </MouseTooltip>
        </div>
    )
}
