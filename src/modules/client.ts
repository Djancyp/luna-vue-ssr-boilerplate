
import { registerModule } from '../../core/lib/modules'
import { RedboxMegamenu } from '../modules/example-module'
import { uiStore } from '../modules/ui'
import {NotificationModule} from '../modules/notification'
export function registerClientModules () {
  registerModule(RedboxMegamenu)
  registerModule(uiStore)
  registerModule(NotificationModule)
}
