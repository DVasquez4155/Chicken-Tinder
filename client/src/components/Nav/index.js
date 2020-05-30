import React from "react";
import RestaurantGroup from "../RestaurantGroup";

require('./index.css')

function Nav() {
  return (
    <main>
          <div className="dynamicDiv" id="dd.0.4.0">
            <div className="sidebar-wrapper">
              <nav>
                <RestaurantGroup />
              </nav>
            </div>
          </div>
    </main>
  );
}

export default Nav;
