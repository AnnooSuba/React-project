import { MyCarousel } from "../../components/Bootstrap/MyCarousel"

// import { SingleCard} from "../../../src/components/mui/Mycards/SingleCard"
import { CardContainer} from "../../../src/components/mui/Mycards/CardContainer"
import { MyNavbar } from "../../components/mui/MyNavbar"

export const Home=()=>{
    return <>
    < MyNavbar/>
    <MyCarousel/>
    {/* < SingleCard/> */}
    < CardContainer/>
    
    <h1>home</h1>
    </>
}
