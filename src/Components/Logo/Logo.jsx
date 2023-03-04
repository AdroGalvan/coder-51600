import imagen1 from "../Images/zapa.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div>
        <img className="logo-nav" style={{cursor:"pointer"}} src={imagen1}/>
    </div>
  )
}

export default Logo