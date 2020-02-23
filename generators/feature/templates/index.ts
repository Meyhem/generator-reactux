import * as <%= featureName %>Actions from './actions'
import * as <%= featureName %>Selectors from './selectors'
import { <%= featureName %>Reducer } from './reducer'
import { <%= featureName %>RootSaga } from './saga'

export {
    <%= featureName %>Actions,
    <%= featureName %>Reducer,
    <%= featureName %>RootSaga,
    <%= featureName %>Selectors
}
