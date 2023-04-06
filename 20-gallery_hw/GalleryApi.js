class GalleryApi {
    static ALBUMS_API = `https://jsonplaceholder.typicode.com/albums`
    static PHOTOS_API = `https://jsonplaceholder.typicode.com/photos`
    static getMenuList () {
        return fetch(GalleryApi.ALBUMS_API, {
            // headers: {
            //     'Content-type': 'application/json'
            // }
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw new Error('Cant get menu from server')
        })
    }
    static getPhotos (albumId) {
        return fetch(GalleryApi.PHOTOS_API + `?albumId=` + albumId, {
            // headers: {
            //     'Content-type': 'application/json'
            // }
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw new Error('Cant get photos from server')
        })
    }
}




