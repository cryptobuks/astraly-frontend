import jsLogger from 'js-logger'

jsLogger.useDefaults({ defaultLevel: jsLogger.ERROR })

const getLogger = (name: string) => {
  if (!name) {
    return jsLogger
  }
  return jsLogger.get(name)
}

const getLogLevel = (name: string) => getLogger(name).getLevel()

const setLogLevel = (level: any, name: string) => {
  getLogger(name).setLevel(level)
}

export { getLogger, getLogLevel, setLogLevel }
