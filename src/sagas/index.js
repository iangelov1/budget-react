import * as entriesSage from './entriesSaga';

export function initSagas(sagaMiddleware) {
    Object.values(entriesSage).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}