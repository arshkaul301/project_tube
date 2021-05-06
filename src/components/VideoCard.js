import { useState, useEffect } from 'react';
import '../css/VideoCard.css';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { SentimentSatisfied } from '@material-ui/icons';

export default function VideoCard(props) {
    const [isMouseTooltipVisibile, setMouseTooltipVisible] = useState(true);
    const setTrue = () => {
        setMouseTooltipVisible(true)
    }
    const displayTooltip = () => {
        setMouseTooltipVisible(false)
        setTimeout(setTrue, 2000);
    }

    return (
        <div className="VideoCard">
            <img className="VideoCard-Image" src={props.image} />
            <div className="VideoCard-Top">
                <img className="VideoCard-Top-Image" src="https://cdn.eso.org/images/thumb300y/eso1907a.jpg" />
                <div className="VideoCard-Top-Content">
                    <div className="VideoCard-Top-Title" onMouseMove={displayTooltip} >
                        Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners(Full E-Commerce)
                        <MouseTooltip
                            visible={isMouseTooltipVisibile}
                            offsetY={20}
                        >
                            <span className="VideoCard-Top-Title-Tooltip" >Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners(Full E-Commerce)</span>
                        </MouseTooltip>
                    </div>
                    <div className="VideoCard-Top-Channel">
                        <div className="VideoCard-Top-Channel-Title">Clever Programmer</div>
                        <CheckCircleIcon className="VideoCard-Top-Verified" />
                    </div>
                    <div className="VideoCard-Top-Views">
                        {'2.1 lakh views \u00b7 2 months ago'}
                    </div>
                </div>
                <button className="VideoCard-Top-Options"><MoreVertIcon /></button>
            </div>
        </div>
    )
}

