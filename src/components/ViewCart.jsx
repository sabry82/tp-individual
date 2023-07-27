import { InsertEmoticon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Chip, Drawer, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const ViewCart = ({ open, cartItems, onDeleteCartItem, onToggleDrawer, onChangeCartItemCant }) => {

    return (
        <Drawer
            anchor={'right'}
            open={open}
            width={505}
            onClose={() => {
                onToggleDrawer(false);
            }}
        >
            <List style={{ backgroundColor: 'gainsboro', marginBottom: 10 }} >
                <ListItem>
                    <ListItemText>Shopping Cart</ListItemText>
                </ListItem>
            </List>
            <Grid container sx={{ width: 500 }}>
                {cartItems && cartItems.length === 0 &&
                    <Grid item md={12}>
                        <Box sx={{  width: 500, textAlign: 'center' }}>
                            <Chip label="No items in cart" component="big" href="#basic-chip" />
                        </Box>
                    </Grid>
                }
                {cartItems && cartItems.length > 0 && cartItems.map((item, i) =>
                    <Grid item md={12}>
                        <Card sx={{ display: 'flex',  margin: 2}} key={i}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: 400 }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="subtitle1">
                                        {item.product.title}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <TextField id="outlined-basic"
                                        sx={{ width: 90 }}
                                        type='number'
                                        label="Cantidad" variant="outlined" value={item.cant}
                                        onChange={(e) => onChangeCartItemCant(item.product, e.target.value)}
                                    />
                                    <Button color='secondary' sx={{ marginLeft: 1 }} onClick={() => onDeleteCartItem(item.product)}>
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: '100%', width: 100,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                                image={item.product.image}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Drawer>
    );
};

export default ViewCart;