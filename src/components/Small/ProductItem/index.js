import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Translator, Translate } from "react-auto-translate";
import React from "react";
import { Header } from "semantic-ui-react";
import "./productitem.css";
import { primary, secondary } from "../../../datas/categories";
import { GOOGLE_API_KEY } from "../../../_const/_const";
import {
  faHeart,
  faHeartCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({
  product,
  _id,
  name,
  type,
  region,
  description,
  price,
  category,
  subCategory,
  choice,
  visible,
  image,
  user,
  setOpenImageModal,
  setSelectedProduct,
}) => {
  const userLang = navigator.language || navigator.userLanguage;

  const cacheProvider = {
    get: (language, key) =>
      ((JSON.parse(localStorage.getItem("translations")) || {})[key] || {})[
        language
      ],
    set: (language, key, value) => {
      const existing = JSON.parse(localStorage.getItem("translations")) || {
        [key]: {},
      };
      existing[key] = { ...existing[key], [language]: value };
      localStorage.setItem("translations", JSON.stringify(existing));
    },
  };

  return (
    <div
      className="productitem"
      style={{
        display: visible ? "" : user ? "" : "none",
        background: secondary,
      }}
    >
      <div className="productitem-header">
        <Header as="h3" style={{ color: "white" }}>
          {!visible ? "Caché : " : ""}
          <div>{name}</div>
          {image && (
            <FontAwesomeIcon
              style={{ color: primary, margin: 8 }}
              icon={faSearch}
              onClick={() => {
                setSelectedProduct(product);
                setOpenImageModal(true);
              }}
            />
          )}
          {choice ? (
            <FontAwesomeIcon
              className="bosschoice alvp__icon"
              color="darkred"
              icon={faHeart}
              size="2x"
            />
          ) : (
            ""
          )}
        </Header>
        {price !== 0 && (
          <span
            className="price"
            style={{ background: primary, color: secondary }}
          >
            {price.toFixed(2).toString()}
            <small>€</small>
          </span>
        )}
      </div>
      {description && (
        <Translator
          cacheProvider={cacheProvider}
          from="fr"
          to={userLang.substr(0, 2)}
          googleApiKey={GOOGLE_API_KEY}
        >
          <p
            className="description"
            style={{ background: primary, color: "white" }}
          >
            <Translate>{description}</Translate>
          </p>
        </Translator>
      )}
    </div>
  );
};

export default ProductItem;
