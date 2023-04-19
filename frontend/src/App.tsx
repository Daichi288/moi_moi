import type { Component } from 'solid-js';
import { routes } from './routes';
import {
  Footer,
  Header,
  Particles,
} from './components';
import {
  useRoutes,
 } from 'solid-app-router';

const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <>
      <Particles />
      <div class="app min-h-screen drop-shadow">
        <Header /*@once*/ />
        <div
          class="container max-w-2xl my-5"
        >
          <Route />
        </div>
        <Footer /*@once*/ />
      </div>
    </>
  );
};

export default App;
