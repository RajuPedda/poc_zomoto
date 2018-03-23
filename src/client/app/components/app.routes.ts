// app
import { HomeRoutes } from './home/home.routes';
import { ContactRoutes } from './contact/contact.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...ContactRoutes
];
