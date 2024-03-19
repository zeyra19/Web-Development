import React, { useState } from 'react';
import { Button, Card, CardContent, Grid } from '@mui/material';

const About = () => {
    const [label, setLabel] = useState("zart")
    const handleClick = () => {
        setLabel("zort gldi")
    }
    return (

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card >
                        <CardContent>xs=2</CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={8}><Card >
                <CardContent>{label}  </CardContent>
            </Card>
            </Grid>
            <Grid item xs={4}><Card >
                <CardContent>
                    <Button onClick={ handleClick }>ZORT</Button>
                    </CardContent>

            </Card>
            </Grid>

            
        </Grid>

    )
}

export default About;