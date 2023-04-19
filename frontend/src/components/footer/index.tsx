import { Component, For } from 'solid-js';
import { Link, useNavigate } from 'solid-app-router';
import config from '../../config';
import language from '../../config/language';
import { Prefix } from '@type';

const HIDDEN_PREFIXES: Prefix[] = ['Home', 'NotFound'];

const Footer: Component = () => {
  const routes = Object.keys(config.route.page).map((key) => ({ prefix: key as Prefix, ...config.route.page[key as Prefix] }));
  return (
    <footer>
      <div class="bg-gray-600 py-2">
        <div class="flex justify-center">
          <For each={routes.filter(route => !HIDDEN_PREFIXES.includes(route.prefix))}>{(route) => 
            <div class="mx-2">
              <Link
                class="text-cyan-400 hover:text-cyan-200 underline"
                href={route.path}
              >
                {language[route.prefix].ja}
              </Link>
            </div>
          }</For>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
