export const daDataToken = "3ea7a66eb4118510e476be8178ea2e6abc6518e0"
class DaDataApi {
    daDataAddressEndpoint = () => "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
}
const daDataApi = new DaDataApi()
export const { daDataAddressEndpoint } = daDataApi