class GalleryApi {
    static ALBUMS_API = `https://jsonplaceholder.typicode.com/albums`
    static PHOTOS_API = `https://jsonplaceholder.typicode.com/photos?albumId=`
    
    static REQUEST(kindOfData, url, id = '') {
        return fetch(url + id, {
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(`Cant get ${kindOfData} from server`)
        })
    }

    static getMenuList () {
       return GalleryApi.REQUEST('list of albums', GalleryApi.ALBUMS_API)
    }
    static getPhotos (id) {
        return GalleryApi.REQUEST('photos', GalleryApi.PHOTOS_API, id)
    }
}




