import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Чехлы'},
            {id: 2, name: 'Защитные пленки'},
            {id: 3, name: 'Карты памяти'},
            {id: 4, name: 'USB-кабеля, переходники'},
            {id: 5, name: 'Зарядные устройства'},
            {id: 6, name: 'Наушники'},
            {id: 7, name: 'Крепления для смартфонов'},
            {id: 8, name: 'Powerbanks'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'ColorWay'},
            {id: 4, name: 'Wave'},
            {id: 5, name: 'Uniq'},
            {id: 6, name: 'Gelius'},
            {id: 7, name: 'Apacer'},
            {id: 8, name: 'Goodram'},
            {id: 9, name: 'Kingston'},
            {id: 10, name: 'SanDisk'},
            {id: 11, name: 'Transcend'},
            {id: 12, name: 'Sony'},
            {id: 13, name: 'Baseus'},
            {id: 14, name: 'BlackBerry'},
            {id: 15, name: 'OPPO'},
            {id: 16, name: 'Huawei'},

        ]
        this._devices = [
            {id: 1, name: 'Панель Apple MagSafe Silicone Case для Apple iPhone 14 Pro Max', price: 2799, rating: 5, img: 'https://content1.rozetka.com.ua/goods/images/big/285423174.jpg'},
            {id: 2, name: 'Панель Apple MagSafe Clear Case для Apple iPhone 14 Pro Clear', price: 2799, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/285421306.jpg'},
            {id: 3, name: 'Панель Apple MagSafe Leather Case для Apple iPhone 14 Pro Forest Green', price: 3099, rating: 3, img: 'https://content2.rozetka.com.ua/goods/images/big/285435753.jpg'},
            {id: 4, name: 'Панель Samsung Rugged Gadget Cover для Samsung Galaxy S23 Ultra Titan', price: 2599, rating: 4, img: 'https://content2.rozetka.com.ua/goods/images/big/311187613.jpg'},
            {id: 5, name: 'Панель BeCover Military для Xiaomi Redmi Note 11/Note 11S Blue', price: 249, rating: 4, img: 'https://content2.rozetka.com.ua/goods/images/big/311187613.jpg'},
            {id: 6, name: 'Кошелек Apple MagSafe Leather Wallet для Apple iPhone Umber', price: 2642, rating: 3, img: 'https://content1.rozetka.com.ua/goods/images/big/285428475.jpg'},
            {id: 7, name: 'Гидрогелевая пленка ArmorStandart Matte для Apple iPhone 13 mini', price: 149, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/328842408.jpg'},
            {id: 8, name: 'Гидрогелевая пленка ArmorStandart для Apple iPhone 14/13/13 Pro', price: 149, rating: 4, img: 'https://content2.rozetka.com.ua/goods/images/big/328842640.jpg'},
            {id: 9, name: 'Гидрогелевая пленка ArmorStandart для Apple iPhone 14 Plus/13 Pro Max', price: 149, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/328842658.jpg'},
            {id: 10, name: 'Карта памяти microSD 512GB SanDisk C10 UHS-I U3 R200/W140MB/s Extreme Pro V30 + SD', price: 6519, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/323918737.jpg'},
            {id: 11, name: 'Карта памяти microSD 512GB SanDisk C10 UHS-I U3 R190/W130MB/s Extreme V30', price: 4797, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/324748292.jpg'},
            {id: 12, name: 'Карта памяти MicroSDXC 1TB UHS-I/U3 Class 10 Patriot EP A1 R90/W80MB/s + SD-adapter', price: 4712, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/348191105.jpg'},
            {id: 13, name: 'Наушники RAZER Hammerhead True Wireless X', price: 4550, rating: 5, img: 'https://content2.rozetka.com.ua/goods/images/big/248000018.png'},
            {id: 14, name: 'Игровая гарнитура Razer Hammerhead True Wireless X', price: 2999, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/205282550.jpg'},
            {id: 15, name: 'Наушники Marshall Minor III Black', price: 2599, rating: 4, img: 'https://content.rozetka.com.ua/goods/images/big/222611690.jpg'},
            {id: 16, name: 'УМБ Xiaomi Mi Power Bank 3 30000 mAh USB-C 18W Fast Charge PB3018ZM White', price: 1099, rating: 4, img: 'https://content1.rozetka.com.ua/goods/images/big/273454262.jpg'},
            {id: 17, name: 'УМБ Baseus Bipow 30000 mAh 15W Black', price: 1099, rating: 4, img: 'https://content.rozetka.com.ua/goods/images/big/223616191.jpg'},
            {id: 18, name: 'УМБ Baseus Adaman Metal 20000mAh 65W Blue', price: 2999, rating: 4, img: 'https://content.rozetka.com.ua/goods/images/big/218334641.jpg'},

        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(type) {
        this._types = type
    }
    setBrands(brand) {
        this._brands = brand
    }
    setDevices(device) {
        this._devices = device
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
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
    get selectedBrand() {
        return this._selectedBrand
    }

}