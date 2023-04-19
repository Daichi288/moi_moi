import { lazy, Component } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import config from './config';
import { Prefix } from '@type';

export const routes: RouteDefinition[] = Object.keys(config.route.page)
  .filter((key) => config.route.page[key as Prefix].visible)
  .map((key) => {
    const pageConfig = config.route.page[key as Prefix];
    const path = pageConfig.path;
    const component = pageConfig.lazy ? lazy(() => import(`./${config.route.basePath}/${key}/index.tsx`)) : pageConfig.component;
    return { path, component };
  });
