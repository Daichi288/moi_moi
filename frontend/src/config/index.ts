import { Config } from '@type';
import Users from '../pages/Users';
import Glossary from '../pages/Glossary';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const config: Config = {
  application: {
    name: {
      ja: 'もいもい',
      en: 'moimoi',
    },
  },
  route: {
    basePath: 'pages',
    page: {
      Home: {
        path: '/',
        component: Home,
        lazy: false,
        visible: true,
      },
      NotFound: {
        path: '/**',
        component: NotFound,
        lazy: false,
        visible: true,
      },
      Glossary: {
        path: '/glossary',
        component: Glossary,
        lazy: true,
        visible: true,
      },
      Users: {
        path: '/users',
        component: Users,
        lazy: true,
        visible: true,
      }
    }
  },
};

export default config;
