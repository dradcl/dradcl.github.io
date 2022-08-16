import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreItem from '../src/StoreItem'

let user = "test_user";

function Store() {
    return (
        <Container>
            <Box
                sx={{
                bgcolor: 'mediumturquoise',
                pt: 4,
                boxShadow: 5,
                m: 2
            }}>
                <HomeIcon
                    fontSize='large'
                    htmlColor='white'
                    sx={{
                        position: 'absolute',
                        mt: -1,
                        ml: 2,
                    }}
                    onClick={() => {
                        window.location.href='/'
                    }}
                />
                <ShoppingCartIcon
                    fontSize='large'
                    htmlColor='white'
                    sx={{
                        position: 'absolute',
                        mt: 5,
                        ml: 2,
                    }}
                />
                <Typography 
                    variant='h2'
                    color='white' 
                    align='center'
                >
                    Welcome to the Store!
                </Typography>
                <Typography variant='subtitle1' color='white' align='center'>
                    We sell the things you love.
                </Typography>
            </Box>
            <Typography variant='subtitle2' align='center'>
                Logged in as {user}
            </Typography>
            <StoreItem />
        </Container>
    );
}

export default Store;