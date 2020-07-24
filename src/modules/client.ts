
import { registerModule } from '../../core/lib/modules'
import { RedboxMegamenu } from '../modules/example-module'
import {uiStore} from '../modules/ui'
export function registerClientModules () {
  registerModule(RedboxMegamenu)
  registerModule(uiStore)
}
