import type { PayloadAction } from '@reduxjs/toolkit';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import { authService } from '../../api/authService';
import { signupRequest, signupFailure, signupSuccess } from '../slices/authSlice';

function* handleSignup(action: PayloadAction<{email: string; password: string; name:string}>): Generator<any, void, any>{
    try{
        const {email, password, name} = action.payload;
        yield call(authService.signUp, email, password, name);
        yield put (signupSuccess());
    }
    catch(err:any){
        yield put(signupFailure("Signup Failed"));
    }
}

export function* watchAuthSaga(){
    yield all([
        takeLatest(signupRequest.type, handleSignup)
    ])
}