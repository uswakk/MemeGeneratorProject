import "../styling/App.css"

export default function Header(props){
    return(<header className="header">

            <img className="header-image" src={`../images/${props.image}`}></img>
            <h3 className="header-title">{props.title}</h3>
    </header>)
}