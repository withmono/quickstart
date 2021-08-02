import ping from './ping.js'
import monoInterface from './mono-interface.js'

export default function (app) {
  ping(app)
  monoInterface(app)
}
