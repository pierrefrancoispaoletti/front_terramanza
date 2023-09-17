import {
  faBeer,
  faCocktail,
  faCoffee,
  faCookieBite,
  faFish,
  faGlassWhiskey,
  faIceCream,
  faMartiniGlassCitrus,
  faPepperHot,
  faPizzaSlice,
  faPlateWheat,
  faUtensils,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const secondary = "#ADC6BD";
export const primary = "#612712";

const categories = [
  {
    name: "Insalate",
    slug: "insalate",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faPlateWheat} />,
  },
  {
    name: "Carne",
    slug: "carne",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faUtensils} />,
  },
  {
    name: "Pescare",
    slug: "pescare",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faFish} />,
  },
  {
    name: "Pasta",
    slug: "pasta",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faUtensils} />,
  },
  {
    name: "Pizza",
    slug: "pizza",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faPizzaSlice} />,
  },

  // {
  //   name: "Tapas",
  //   slug: "tapas",
  //   icon: (
  //     <FontAwesomeIcon
  //       size="4x" color="#ADC6BD"
  //       icon={faPepperHot}
  //       style={{
  //         "--fa-primary-color": primary,
  //         "--fa-secondary-color": secondary,
  //       }}
  //     />
  //   ),
  // },
  {
    name: "Desserts",
    slug: "desserts",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faCookieBite} />,
  },
  {
    name: "Boissons Fraîches",
    slug: "boissons-fraiches",
    icon: (
      <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faMartiniGlassCitrus} />
    ),
  },
  {
    name: "Boissons Chaudes",
    slug: "boissons-chaudes",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faCoffee} />,
  },
  {
    name: "Les Alcools",
    slug: "alcools",
    icon: <FontAwesomeIcon size="4x" color="#ADC6BD" icon={faGlassWhiskey} />,
    subCategories: [
      {
        name: "Bières",
        slug: "bieres",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faBeer}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
      {
        name: "Apéritifs et Alcools",
        slug: "aperitifs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskey}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
      {
        name: "Vins",
        slug: "vins",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
    ],
  },
];

export default categories;
