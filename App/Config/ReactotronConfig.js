import Config from './DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'
import { name as appName } from '../../app.json'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'

const reactotron = Reactotron
        .configure({ name: appName })
        .useReactNative()
        .use(reduxPlugin({ onRestore: Immutable }))
        .use(sagaPlugin())
        .connect()

export default reactotron
