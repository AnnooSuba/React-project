import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
// import img from '../../../img/labrador-retriever-1210559_640.jpg'
// import { Interface } from 'readline'
import img from '../../../img/labrador-retriever-1210559_640.jpg'
interface ISingleCard{
    img:any
}
export const SingleCard:React.FC<ISingleCard> = ({img})=> {
    return <>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        component={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
}
