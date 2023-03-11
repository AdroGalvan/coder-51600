import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom"

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 345, height: 340 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{textDecoration:"none"}} to={ `/itemDetail/${element.id}`}>
        <Button size="small" variant="contained" color="secondary">
          Ver detalle
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;