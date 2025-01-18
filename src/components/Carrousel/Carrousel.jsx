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
        image: 'moto.png',
        button: true,
        buttonValue: 'Haz click para saber más!'
    },
    {
        title: 'Soporte Técnico Continuo',
        description: 'Aseguramos el éxito de tu tienda online.',
        image: 'service.png'
    },
    {
        title: 'Gestoría',
        description: 'Trámites en BPS, DGI, inscripción de unipersonales.',
        image: 'gestoria.jpg',
        button: true,
        buttonValue: 'Haz click para saber más!'
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
                <p className='mt-3 desliza'>Desliza para ver más!</p>
            </div>
        </div>
    );
};

const ServiceCarousel = () => {
    return (
        <div className="carrousel">
            <Carousel
                value={services}
                circular={true}
                numVisible={1}
                numScroll={1}
                itemTemplate={itemTemplate}
                autoplayInterval={5000}
            />
        </div>
    );
};

export default ServiceCarousel;
