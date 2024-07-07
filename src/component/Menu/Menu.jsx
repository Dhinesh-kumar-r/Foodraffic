import { menu_list } from "../../assets/Menu"
import "../Menu/Menu.css"
// eslint-disable-next-line react/prop-types
const Menu = ({category,setCategory}) => {
  return (  
        <>
            <div className="container explore-menu">
                <span className="menu-title">Our Cuisines</span>
                <div className="menu-items">
                    {
                        menu_list.map((item,index)=>{
                            return (
                                <div onClick={()=>setCategory(prev=>prev === item.name? "All":item.menu_name)} key={index} className="menu-list">
                                    <img src={item.menu_image} alt="menu-image" className={category===item.menu_name? "active" : ""} />
                                    <p className="item-title">{item.menu_name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
            </div>

        </> 
 )
}

export default Menu