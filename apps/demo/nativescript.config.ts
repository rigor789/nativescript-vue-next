import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.vue.demo',
  appPath: 'app',
  appResourcesPath: 'app_resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    maxLogcatObjectSize: 10000,
  },
  cli: {
    packageManager: 'yarn',
  },
} as NativeScriptConfig
