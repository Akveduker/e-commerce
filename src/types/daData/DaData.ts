import { daDataToken } from './../../api/daData/daDataApi';
export interface IDaDataReturn {
    suggestions: IDaDataItem[]
}
export interface IDaDataItem {
    unrestricted_value: string;
    value: string;
    data: IDaDataItemData;
}
export interface IDaDataItemData {
    city: string;
    street_with_type: string;
    street: string;
    house: string;
    city_with_type: string;
    street_fias_id: string;
    city_fias_id: string;
}
export interface IDaDataPostRequestBody {
    query: string,
    "from_bound": {
        "value": string,
    },
    "to_bound": { "value": string },
    "locations": any[],
}
export interface IDaDataPostRequestParams {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${typeof daDataToken}`
    },
    body: string;
}