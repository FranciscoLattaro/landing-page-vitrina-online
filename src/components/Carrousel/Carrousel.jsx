import React from 'react';
import { Carousel } from 'primereact/carousel';
import './Carrousel.css';

const services = [
    {
        title: 'Crea tu Tienda Online con Shopify',
        description: 'Tu tienda digital lista para empezar a vender.',
        image: 'https://img.freepik.com/foto-gratis/persona-agregando-ropa-al-carro-closeup-campana-compras-online_53876-96211.jpg?t=st=1736953527~exp=1736957127~hmac=55734a3a691cac752b4a04fbc8c6a5345d2f32c5713ef96e0cecaf416d3cd28f&w=1060'
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
        <div className="p-3 carrousel">
            <div className="text-center">
                <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '8px' }} />
                <h3 className="mt-3">{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

const ServiceCarousel = () => {
    return (
        <div className="carrousel">
            <Carousel value={services} numVisible={1} numScroll={1} itemTemplate={itemTemplate} />
        </div>
    );
};

export default ServiceCarousel;
