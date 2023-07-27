import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Link } from '@mui/material';

function GrillaProductos({ categoria, onAddToCart }) {
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    setProductos([]);
    fetch(`https://fakestoreapi.com/products/category/${categoria}`)
      .then(res => res.json())
      .then(json => setProductos(json));
  }, [categoria]);

  if (!productos || productos.length === 0)
    return (<h1>Buscando...</h1>);

  return (
    <Grid container spacing={4}>
      {productos.map((producto, i) => (
        <Grid key={i} item xs={12} md={3}>
          <Card>

            <CardMedia
              component="img"
              sx={{ maxHeight: 160, display: { xs: 'none', sm: 'block' } }}
              image={producto.image}
              alt={producto.imageLabel}
            />
            <CardContent >
              <Typography component="h4" variant="h5">
                {producto.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {producto.category}
              </Typography>
              <Typography variant="subtitle2" paragraph>
                {producto.description.length > 120 ? (producto.description.substring(0, 120) + '...') : producto.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Button variant='contained' color='secondary' onClick={(e) => onAddToCart(producto)}>Add to cart</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}



export default GrillaProductos;