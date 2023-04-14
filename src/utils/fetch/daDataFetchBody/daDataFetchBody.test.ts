import { daDataToken } from "../../../api/daData/daDataApi"
import { IDaDataPostRequestBody, IDaDataPostRequestParams } from "../../../types/daData/DaData"
import { daDataFetchBody } from "./daDataFetchBody"


describe('daDataFetchBody', () => {
    const query = 'query'
    const location = 'location'
    const requestBody: IDaDataPostRequestBody = {
        query: query,
        "from_bound": {
            "value": location,
        },
        "to_bound": { "value": location },
        "locations": [],
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
    test('Тело запроса корректно', () => {
        expect(daDataFetchBody(query, location)).toEqual(requestParams)
    })
})