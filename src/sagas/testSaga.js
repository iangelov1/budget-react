import { delay, take, put, call, fork } from 'redux-saga/effects';

export function* double (number) {
    return number * 2
}

export function* testSaga () {
    while(true) {
        console.log('Starting saga')
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b)
        console.log('Finish saga', state)
    }
}

function* doNoting () {
    console.log('22222222222222222222222222')
    yield delay(1000);
    console.log('111111111111111111111111111111')
}

export function* testSagaFork () {
    while(true) {
        yield take('TEST_MESSAGE_2')
        yield call(doNoting)
        yield call(doNoting)
        yield call(doNoting)
    }
}

export function* dispatchTest () {
    while (true) {
        yield delay(5000);
        yield put({type: 'TEST_MESSAGE_2', payload: 1000});
    }
}