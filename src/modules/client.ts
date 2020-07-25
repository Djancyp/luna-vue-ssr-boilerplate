
import { registerModule } from '../../core/lib/modules'
import { ExampleSsrModule } from '../modules/example-module'
import { uiStore } from '../modules/ui'
import {NotificationModule} from '../modules/notification'
export function registerClientModules () {
  registerModule(ExampleSsrModule)
  registerModule(uiStore)
  registerModule(NotificationModule)
}
