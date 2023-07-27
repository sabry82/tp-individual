import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import GrillaProductos from './GrillaProductos';
import ViewCart from './ViewCart';

import { toast } from 'react-toastify';


const mainFeaturedPost = {
  title: 'AUTUMN WINTER 2023',
  description:
    "",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const defaultTheme = createTheme();

export default function HomePage() {


  const [categoria, setCategoria] = React.useState('jewelery');

  // [{ product: {}, cant: 3 }]
  const [carrito, setCarrito] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setIsOpen(newOpen);
  };
  
  const notify = () => toast("Item added to cart!")

  const addToCart = (product) => {
    let finded = carrito.find((i) => i.product.id === product.id);

    if (finded)
      finded.cant++;
    else {
      finded = { product: product, cant: 1 };
      setCarrito(c => [...c, finded]);
      notify();
    }
  }

  const changeCartItemCant = (product, cant) => {
    let finded = carrito.find((i) => i.product.id === product.id);

    if (finded) {
      if (cant < 1) return;
      finded.cant = cant;
      setCarrito(c => [...c]);
    }
  }

  const deleteCartItem = (product) => {
    let newCart = carrito.filter((i) => i.product.id !== product.id);
    setCarrito(newCart);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Shop" onCategorySelected={setCategoria} cantEnCarrito={carrito.length} onToggleDrawer={toggleDrawer} />
        <main>
          <ViewCart open={isOpen} onDeleteCartItem={deleteCartItem} cartItems={carrito} onToggleDrawer={toggleDrawer} onChangeCartItemCant={changeCartItemCant} />

          <MainFeaturedPost post={mainFeaturedPost} />

          <GrillaProductos categoria={categoria} onAddToCart={addToCart} />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}