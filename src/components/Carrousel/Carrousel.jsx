import React from 'react';
import { Carousel } from 'primereact/carousel';
import './Carrousel.css';

const services = [
    {
        title: 'Crea tu Tienda Online con Shopify',
        description: 'Tu tienda digital lista para empezar a vender.',
        image: '/shopify.png',
        button: true,
        buttonValue: 'Haz click para ver ejemplos!'
    },
    {
        title: 'Gestión de Entregas sin Esfuerzo',
        description: 'Nos encargamos de tus envíos para que te enfoques en crecer.',
        image: 'https://img.freepik.com/foto-gratis/hombre-entrega-paquetes_23-2148869418.jpg?t=st=1736953752~exp=1736957352~hmac=bf758d9ef7fda738df1fa55a20d0c719e4d9c3501a7a28c43309eb4d019af6bd&w=1060'
    },
    {
        title: 'Soporte Técnico Continuo',
        description: 'Aseguramos el éxito de tu tienda online.',
        image: 'https://img.freepik.com/foto-gratis/mujer-joven-que-trabaja-su-taller-invencion-creativa_23-2149067209.jpg?t=st=1736954672~exp=1736958272~hmac=619b31dd0ffdd0a75afc7da459d58661a6fbd77b203da31434beee9391c2fd51&w=1060'
    }
];

const itemTemplate = (service) => {
    return (
        <div className="p-0 mt-5">
            <div className="carousel">
                <img src={service.image} alt={service.title} style={{ width: '100%' }} />
                <h3 className="mt-3">{service.title}</h3>
                <p>{service.description}</p>
                {service.button && (
                    <input
                        type="button"
                        value={service.buttonValue}
                        className="carousel-button"
                        onClick={() => alert('Ejemplo de acción para el botón!')}
                    />
                )}
            </div>
        </div>
    );
};

const ServiceCarousel = () => {
    return (
        <div className="carrousel">
            <Carousel
                value={services}
                autoplayInterval={3000}
                circular={true}
                numVisible={1}
                numScroll={1}
                itemTemplate={itemTemplate}
            />
        </div>
    );
};

export default ServiceCarousel;
