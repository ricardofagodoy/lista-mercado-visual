export default interface ProductImageRepository {
    getImagesFromQuery(query : string) : Promise<string[]>
}