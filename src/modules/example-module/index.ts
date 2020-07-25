import { Blogs } from './stores';
import { StorefrontModule } from 'core/lib/modules';
export const ExampleSsrModule: StorefrontModule = function ({ store }) {
  store.registerModule('ExampleSsrModule', Blogs);
};
