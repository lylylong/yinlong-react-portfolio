import React from "react";
// this is a container to display different pages
function PageContent(props) {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
}
export default PageContent;
