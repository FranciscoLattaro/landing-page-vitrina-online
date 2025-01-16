import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import ServiceCarousel from "../../components/Carrousel/Carrousel";
import MediaCard from "../../components/MediaCard/MediaCard";
import { AddBusiness } from "@mui/icons-material";
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
const HomeView = () => {
  // Contenido de los MediaCard como un arreglo de objetos
  const mediaCardsData = [
    {
      icon: AddBusiness,
      title: "¿Qué ofrecemos?",
      description:
        "Ayudamos a pequeños negocios a digitalizarse creando su tienda online en Shopify de forma gratuita, " +
        "lo que les permite aumentar su alcance, vender 24/7 y ofrecer a sus clientes una experiencia de compra moderna.",
      showButton1: false,
      showButton2: false,
    },
    {
      icon: SyncProblemIcon,
      title: "¿Qué problema resolvemos?",
      description:
        "Muchas pequeñas tiendas no tienen presencia online porque no saben cómo empezar, y necesitan ayuda confiable con la logística de envíos. " +
        "El 60% de los pequeños negocios no tiene una tienda online, lo que limita su crecimiento y capacidad de competir en un mundo digital.",
      showButton1: false,
      showButton2: false,
    },
    {
      icon: CompareArrowsIcon,
      title: "¿Qué nos diferencia de la competencia?",
      description:
        "No solo hacemos tiendas, también aseguramos que cada cliente tenga soporte continuo y logística eficiente. " +
        "No solo entregamos una tienda y un servicio logístico, sino que acompañamos al cliente con soporte técnico continuo.",
      showButton1: false,
      showButton2: false,
    },
  ];

  return (
    <div className="align-items-center">
      <Navbar />
      <ServiceCarousel />
      <div style={{backgroundColor: '#f2f2f2', paddingBottom: '5rem'}}> {mediaCardsData.map((card, index) => (
        <MediaCard
          key={index} // Usar el índice como clave (idealmente un ID único si estuviera disponible)
          icon={card.icon}
          title={card.title}
          description={card.description}
          showButton1={card.showButton1}
          showButton2={card.showButton2}
        />
      ))}</div>
    </div>
  );
};

export default HomeView;
