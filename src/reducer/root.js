import { combineReducers } from 'redux'
import changeNumber from './reducer'

export const rootReducer= combineReducers(
    {changeNumber : changeNumber}
)