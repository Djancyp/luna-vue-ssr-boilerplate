import { notificationStore } from './store'
import { StorefrontModule } from 'core/lib/modules';
export const NotificationModule: StorefrontModule = function ({store}) {
  store.registerModule('notification', notificationStore)
}
