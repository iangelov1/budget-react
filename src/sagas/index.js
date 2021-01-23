// import * as testSaga from './testSaga';

import * as entriesSage from './entriesSaga';

export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSage).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}