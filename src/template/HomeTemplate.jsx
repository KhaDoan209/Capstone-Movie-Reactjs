import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';

export const HomeTemplate = (props) => {
   const { component, ...restProps } = props;
   console.log(props);

   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return (
               <>
                  <Header />
                  <props.component {...propsRoute} />
               </>
            );
         }}
      />
   );
};
