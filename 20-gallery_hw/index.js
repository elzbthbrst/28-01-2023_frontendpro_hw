"use strict"
const CLASS_ALBUM_ITEM = '.album-item'

const albums = document.querySelector('.gallery-albums')
const photos = document.querySelector('.gallery-photos')

let albumsList = []

albums.addEventListener('click', onGalleryListClick)


GalleryApi
    .getMenuList()
    .then((list) => {
        renderAlbuns(list)
        albumsList = list
        showPhotos(albumsList[0])
    })
    .catch((e) => showError(e))


function onGalleryListClick(e) {
    const target = e.target
    const album = getAlbumEl(target)
    if (!album) {
        return
    }
    showPhotos(album)
}

function getAlbumEl(el) {
    return el.closest(CLASS_ALBUM_ITEM)
}

function showPhotos(album) {
    const albumId = album.id
    GalleryApi
        .getPhotos(albumId)
        .then((list) => {
            renderPhotos(list)
        })
        .catch((e) => showError(e))

}

function renderAlbuns(list) {
    const html = list.map(generateAlbumHtml).join(' ')
    albums.innerHTML = html
}

function generateAlbumHtml(album) {
    return `
    <div> <a id="${album.id}" class="album-item" href="#"> ${album.title}</a> </div>
    `
}

function renderPhotos(list) {
    const html = list.map(generatePhotoHtml).join(' ')
    photos.innerHTML = html
}

function generatePhotoHtml(photo) {
    return `
    <div id="${photo.id}" class="img-item" > <img src="${photo.url}" alt=""></img></div>
    `
}

function showError(e) {
    alert(e.message)
}