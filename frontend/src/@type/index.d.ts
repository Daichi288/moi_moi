import { Component } from "solid-js";

declare type GlossaryId = string;
declare type Title = string;
declare type Description = string;
declare type Path = string;
declare type Name = string;
declare type Prefix = 'Home' | 'NotFound' | 'Glossary' | 'Users';
declare type Visible = boolean;
declare type Lazy = boolean;

declare type LocalizationValue = {
  ja: string;
  en: string;
}

export interface IGlossary {
  title: Title;
  description: Description;
}

export declare type Config = {
  application: ApplicationConfig;
  route: RouteConfig;
};

export declare type ApplicationConfig = {
  name: LocalizationValue;
};

export declare type RouteConfig = {
  basePath: Path;
  page: { [key in Prefix]: {
    path: Path;
    component: Component;
    lazy: Lazy;
    visible: Visible;
  } };
};

declare class User {
  id: string;
  name: string;
}
