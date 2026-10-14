declare module "next" {
  export interface NextConfig {
    [key: string]: any;
  }
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module "next/font/google" {
  export function Geist(options?: any): any;
  export function Geist_Mono(options?: any): any;
  export function Inter(options?: any): any;
  export function Roboto(options?: any): any;
}

declare module "next/link" {
  import React from "react";
  const Link: React.ComponentType<any>;
  export default Link;
}

declare module "next/image" {
  import React from "react";
  const Image: React.ComponentType<any>;
  export default Image;
}
