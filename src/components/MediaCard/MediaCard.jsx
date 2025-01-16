import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MediaCard = ({
  icon: Icon, // Recibe el ícono como una propiedad
  title,
  description,
  buttonText1 = 'Button 1',
  buttonText2 = 'Button 2',
  onButtonClick1,
  onButtonClick2,
  showButton1 = true, // Booleano para mostrar/ocultar el primer botón
  showButton2 = true, // Booleano para mostrar/ocultar el segundo botón
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start', // Centrar en móvil
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <Box
          sx={{
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.light',
          }}
        >
          {Icon && <Icon sx={{ fontSize: 64, color: 'primary.main' }} />}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {showButton1 && buttonText1 && (
            <Button size="small" onClick={onButtonClick1}>
              {buttonText1}
            </Button>
          )}
          {showButton2 && buttonText2 && (
            <Button size="small" onClick={onButtonClick2}>
              {buttonText2}
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

// Define los tipos de las propiedades
MediaCard.propTypes = {
  icon: PropTypes.elementType, // Acepta un componente de ícono
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
  onButtonClick1: PropTypes.func,
  onButtonClick2: PropTypes.func,
  showButton1: PropTypes.bool, // Controla la visibilidad del primer botón
  showButton2: PropTypes.bool, // Controla la visibilidad del segundo botón
};

export default MediaCard;
