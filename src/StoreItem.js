import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import store_items from '../store_items.json'

function StoreItem() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {store_items.products.map((product) => (     
                    <Grid item key={1} xs={12} sm={6}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.id}
                                sx={{
                                    height:250,
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {product.product_name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    ${product.price}
                                </Typography>
                                <Typography>
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color='secondary' size="small">Buy</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default StoreItem;