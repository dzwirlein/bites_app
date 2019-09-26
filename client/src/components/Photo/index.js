import React from "react";

function Photo(props) {

  const src="https://maps.googleapis.com/maps/api/place/photo?key="+ process.env.REACT_APP_API_KEY + "&photoreference=" + "CmRaAAAAfxSORBfVmhZcERd-9eC5X1x1pKQgbmunjoYdGp4dYADIqC0AXVBCyeDNTHSL6NaG7-UiaqZ8b3BI4qZkFQKpNWTMdxIoRbpHzy-W_fntVxalx1MFNd3xO27KF3pkjYvCEhCd--QtZ-S087Sw5Ja_2O3MGhTr2mPMgeY8M3aP1z4gKPjmyfxolg" + "maxwidth=400"
  return (
    <div className ="photo">
      <img width="200" height="200" frameBorder="0" stylename="border:0"
      src={src} allowFullScreen title="restaurant"></img>
    </div>
  );
}
  
export default Photo;