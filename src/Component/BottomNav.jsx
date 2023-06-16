import React from "react";

const BottomNav = () => {
  return (
    <div>
      <div className="maindivofbuttom">
        <div className="ButtomNAvfulldiv">
          <input className="morebehance" type="button" value="More Behance" />
          <input className="morebehance" type="button" value="English" />
          <input className="TOU" type="button" value="TOU" />
          <input className="TOU" type="button" value="Privacy" />
          <input className="TOU" type="button" value="Community" />
          <input className="TOU" type="button" value="Help" />
          <input className="TOU" type="button" value="Cookie preferences" />
          <input
            className="TOU"
            type="button"
            value="Do not sell or share my personal information"
          />
        </div>
        <div className="adobedivrgsid">
          <input className="Adobebt2" type="button" value="Adobe" />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
