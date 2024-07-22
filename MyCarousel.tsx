import { ImportContactsTwoTone } from "@mui/icons-material";
import Carousel  from "react-bootstrap/Carousel";
import img1 from "../../../src/img/220-cute-white-dog-names-with-meanings-for-your-puppy.jpg"
import img2 from "../../../src/img/maltese-1123016_640.jpg"
import img3 from "../../../src/img/puppies-2267080_1280.jpg"

function MyCarousel () {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
        <img height="500px" width="100%" src={img1}/>
          
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img height="500px" width="100%" src={img2}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img height="500px" width="100%" src={img3}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
    );
}
export {MyCarousel};