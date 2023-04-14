interface IApi {
    endpoint: string;
}
class Api {
    endpoint: string
    constructor({ endpoint }: IApi) {
        this.endpoint = endpoint
    }
    allCategoriesEndpoint = () => `${this.endpoint}/Categories`
    searchInAllProducts = (query: string) => `${this.endpoint}/Products?q=${query}&_limit=10`
    allLinksEndpoint = () => `${this.endpoint}/Links`
    allCommentsEndpoint = () => `${this.endpoint}/Comments`
    productByIdEndpoint = (id: number) => `${this.endpoint}/Products/${id}`
    allOfferingEndpoint = () => `${this.endpoint}/Offering`
    categoryByIdEndpoint = (id: number) => `${this.endpoint}/Categories/${id}`
    allProductsEndpoint = (catId: number[]) => `${this.endpoint}/Products?${catId.map(id => `category=${id}`).join('&')}`
    allBrandsEndpoint = () => `${this.endpoint}/Brands`
    productPageByIdEndpoint = (id: number) => `${this.endpoint}/ProductPages/${id}`
    registerEndpoint = () => `${this.endpoint}/register`
    loginEndpoint = () => `${this.endpoint}/login`
    usersEndpoint = () => `${this.endpoint}/users`
    userByIdEndpoint = (id: number) => `${this.endpoint}/600/users/${id}`
    cartEndpoint = () => `${this.endpoint}/cart`
    cartByIdEndpoint = (id: number) => `${this.endpoint}/600/cart?userId=${id}`
    changeCartItemEndpoint = (id: number) => `${this.endpoint}/600/cart/${id}`
}
const api = new Api({
    endpoint: 'http://localhost:3001'
})
export const {
    allCategoriesEndpoint,
    allLinksEndpoint,
    allCommentsEndpoint,
    productByIdEndpoint,
    allOfferingEndpoint,
    categoryByIdEndpoint,
    allBrandsEndpoint,
    allProductsEndpoint,
    productPageByIdEndpoint,
    registerEndpoint,
    loginEndpoint,
    cartByIdEndpoint,
    userByIdEndpoint,
    changeCartItemEndpoint,
    searchInAllProducts,
    cartEndpoint
} = api