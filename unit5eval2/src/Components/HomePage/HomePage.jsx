import React from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@material-ui/core';


function HomePage() {
    const [list,setList] = React.useState([]);
    React.useEffect(()=>{
        getData()
    },[])

    async function getData(){
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setList(data.results)
    }
    return (
        <div>
            <div>
                {list.map((item)=>{
                    return (
                    <Card style={{width:300,backgroundColor:'red'}}>
                        <CardContent>
                            <Typography style={{fontSize:15}}>
                                {item.name}
                            </Typography>
                            <Typography style={{fontSize:15}}>
                                {item.status}
                            </Typography>
                            <Typography style={{fontSize:15}}>
                                {item.species}
                            </Typography>
                            <img src={item.image} alt="/"/>
                        </CardContent>
                    </Card>
                    )
                    })}
            </div>
            
        </div>
    )
}

export default HomePage
