import { call, put, take } from "redux-saga/effects";

import entriesTypes from '../actions/entries.actions';

import axios from 'axios';

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES_ALL);
    
    const result = yield call(axios, 'http://localhost:3001/entries')

    yield put({ type: 'POPULATE_ENTRIES', payload: result.data })
}