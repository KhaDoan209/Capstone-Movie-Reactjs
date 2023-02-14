import { Route } from 'react-router-dom';
import React, { useState } from 'react';
export const AdminTemplate = (props) => {
   const [collapsed, setCollapsed] = useState(false);
   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return <></>;
         }}
      />
   );
};
