export function once (key, fn) {
  const { process = {} } = global
  const processKey = key + '__ONCE__'
  if (!process.hasOwnProperty(processKey)) {
    // Logger.debug(`Once ${key}`, 'helper')()
    process[processKey] = true
    fn()
  }
}
