import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Badge } from '@mui/material';

function Header({ title, cantEnCarrito, onCategorySelected, onToggleDrawer }) {

  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategorias(json));
  }, []);

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton onClick={() => onToggleDrawer(true)}>
          <Badge badgeContent={cantEnCarrito} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {categorias.map((c) => (
          <Link
          component="button"
            color="inherit"
            noWrap
            key={c}
            variant="button"
            onClick={(e) => onCategorySelected(c)}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {c}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}



export default Header;