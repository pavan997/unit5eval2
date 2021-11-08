import React from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from './Homepage.module.css'
import {Link} from 'react-router-dom'


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
            <div className={styles.cont}>
                {list.map((item)=>{
                    return (
                <Link to={`list/${item.id}`}>
                    <Card style={{width:350,backgroundColor:'#21'}}>
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
                            <img src={item.image} width='250' height='250' alt="/"/>
                        </CardContent>
                    </Card>
                    </Link>
                    )
                    })}
            </div>
            
        </div>
    )
}

export default HomePage
