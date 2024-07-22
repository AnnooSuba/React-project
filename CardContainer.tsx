import { useEffect, useState } from 'react';
import { flipkartApi } from '../../../api/flipkartApi'
import { SingleCard } from './SingleCard';
import { Grid } from '@mui/material';


export const CardContainer=()=>{
    let [data,setData]=useState([]);
    console.log(data)
    useEffect(()=>{
        flipkartApi().then((g)=>{
            setData(g)
        })
    },[])
    return <>
    <br />
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
            {data.map((a:any)=>{
                return <SingleCard img={a.image}></SingleCard>
            })}
            
            
        </Grid>
    
    
    </>

}
