import { ErrorValidator } from '../error/error';
import { STATUS_DONE, STATUS_EMPTY } from './../../data/status/status';
import { Status, ExpandenStatus } from './../categories/categories';
export interface IDataLoadingState {
    status: Status;
    errorBody: string;
}
STATUS_DONE

export type InitialDataLoadingState = ExpandenStatus | { type: typeof STATUS_EMPTY }
export type InitialDataValidatingStatuses = { isRequired: true, status: ExpandenStatus } | { isRequired: false, status: InitialDataLoadingState }