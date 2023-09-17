import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const ProductsFilteringMenu = ({
  dropdownValue,
  subCategories,
  activeMenu,
  setActiveMenu,
  setDropdownValue,
  products,
}) => {
  return (
    <Menu
      compact
      borderless
      icon="labeled"
      className="categories-menu"
      style={{ position: "relative" }}
    >
      {subCategories.map((subCategory) => (
        <>
          <Menu.Item
            key={subCategory.slug}
            className="menu-items"
            active={activeMenu === subCategory.slug}
            onClick={() => setActiveMenu(subCategory.slug)}
          >
            <Menu.Header>{subCategory.icon}</Menu.Header>
            {subCategory.name}
          </Menu.Item>
        </>
      ))}
    </Menu>
  );
};

export default ProductsFilteringMenu;
