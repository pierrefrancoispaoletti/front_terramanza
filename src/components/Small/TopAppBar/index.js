import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./topappbar.css";
const TopAppBar = ({
  setSelectedCategory,
  setSidebarVisible,
  setOpenLoginModal,
  user,
  loading,
}) => {
  return (
    <div className="topappbar">
      <Link to="/" onClick={() => setSelectedCategory({})}>
        <div className="topappbar-image">
          <img
            height="120px"
            src="./assets/images/logo.png"
            alt="logo cafe latin"
          />
        </div>
      </Link>
      <div className="topappbar-icons">
        <Button
          disabled={loading}
          loading={loading}
          icon
          circular
          color={user ? "green" : "grey"}
          onClick={() => setOpenLoginModal(true)}
        >
          <FontAwesomeIcon size="3x" icon={faUser} />
        </Button>
        <Button
          disabled={loading}
          loading={loading}
          icon
          circular
          onClick={() => setSidebarVisible(true)}
        >
          <FontAwesomeIcon size="3x" icon={faBars} />
        </Button>
      </div>
    </div>
  );
};

export default TopAppBar;
