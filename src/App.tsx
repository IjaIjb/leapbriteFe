import React, { Suspense } from 'react';
import routes from './routes/Index';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="">
     <Suspense>
        <Switch>
          {routes.map((route: any, i: any) => {
            return route.component ? (
              <Route
                key={i}
                exact={true}
                path={route.path}
                render={(props: any) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
