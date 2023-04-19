import type { Component } from "solid-js";
import { Link } from "solid-app-router";
import config from "../../config";

const Title: Component = () => (
  <Link href="/" class="text-white">
    {config.application.name.ja}
  </Link>
);

const Header: Component = () => {
  return ( 
    <div class="sticky top-0">
      <div
        class="bg-gray-900 drop-shadow"
      >
        <div class="flex justify-start content-center p-2">
          <div class="px-2">
            <Title />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
