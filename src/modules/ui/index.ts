import { ui } from './stores';
import { StorefrontModule } from 'core/lib/modules';
export const uiStore: StorefrontModule = function ({ store }) {
  store.registerModule('ui', ui);
};
