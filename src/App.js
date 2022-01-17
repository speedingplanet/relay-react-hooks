import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import RelayEnvironment from './RelayEnvironment';
import routes from './demos';

function App(props) {
  return (
    <Router>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <main className="container">
          <header>
            <h1>Relay, React, and Hooks</h1>
            <hr />
          </header>
          <div className="row">
            <div className="col-2 mt-3">
              <nav>
                <ul>
                  {routes.map((route) => (
                    <li key={route.url}>
                      <NavLink to={route.url}>{route.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.url}
                    path={route.url}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </main>
      </RelayEnvironmentProvider>
    </Router>
  );
}

export default App;
