import ProductImageRepository from "./ProductImagesRepository"

class PaoImageRepository implements ProductImageRepository {

    readonly API : string = 'https://api.linximpulse.com/engage/search/v3/search?apikey=paodeacucar&origin=https://www.paodeacucar.com&page=1&resultsPerPage=12&terms='

    constructor() {
        console.log('Instantitaing PaoImageReposiory')
    }

    async getImagesFromQuery(query: string): Promise<string[]> {
        const response = await (await fetch(this.API + query)).json()
        return response.products.map((p: { images: { default: string } }) => 'https://' + p.images.default.replace('x200x200', ''))
    }
}

export default new PaoImageRepository()