import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-zen_doc/4457333/pub_60797fe8fea06e298d610bf3_607981256b624c551d33bcc5/scale_1200'},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-zen_doc/4457333/pub_60797fe8fea06e298d610bf3_607981256b624c551d33bcc5/scale_1200'},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-zen_doc/4457333/pub_60797fe8fea06e298d610bf3_607981256b624c551d33bcc5/scale_1200'},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-zen_doc/4457333/pub_60797fe8fea06e298d610bf3_607981256b624c551d33bcc5/scale_1200'},
        ]
        this._selectedType = {}
            makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    get types() {
        return this._types
    }
    setSelectedType (type) {
        this._selectedType = type
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
}