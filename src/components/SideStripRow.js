import '../css/SideStripRow.css';

export default function SideStripRow(props){
    return(
        <div className="SideStripRow">
            <button className="SideStripRowButton">{<props.icon className="SideStripRowIcon"/>}{props.title}</button>     
       </div>
    )
}
