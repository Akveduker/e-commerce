import { IDaDataPostRequestParams, IDaDataPostRequestBody } from './../../../types/daData/DaData';
import { daDataToken } from './../../../api/daData/daDataApi';
export const daDataFetchBody = (query: string, location: string, prev?: {}) => {
    const locations: any[] = []
    if (prev) locations.push(prev)
    const requestBody: IDaDataPostRequestBody = {
        query: query,
        "from_bound": {
            "value": location,
        },
        "to_bound": { "value": location },
        "locations": locations,
    }
    const requestParams: IDaDataPostRequestParams = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${daDataToken}`
        },
        body: JSON.stringify(requestBody)
    }
    return requestParams
}