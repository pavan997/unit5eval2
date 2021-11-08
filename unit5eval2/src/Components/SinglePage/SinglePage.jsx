import React from 'react'
import {useParams} from 'react-router';
import axios from 'axios';
import Card  from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';



function SinglePage() {
    const params = useParams();
    const [product,setProduct] = React.useState([]);
     React.useEffect(()=>{
         getData()
     },[])
     async function getData(){
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        setProduct(data);
     }
    return (
        <div>
            <Card style={{width:350,backgroundColor:'#21'}}>
                        <CardContent>
                            <Typography style={{fontSize:15}}>
                                {product.name}
                            </Typography>
                            <Typography style={{fontSize:15}}>
                                {product.status}
                            </Typography>
                            <Typography style={{fontSize:15}}>
                                {product.species}
                            </Typography>
                            <img src={product.image} width='250' height='250' alt="/"/>
                        </CardContent>
                    </Card>
            
        </div>
    )
}

export default SinglePage
