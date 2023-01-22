class ProductManager {
    constructor() {
        this.productos = []
        this.idCounter = 1
    }

    getProductos = () => {
        return this.productos
    }

    getProductosById = (id) => {
        const product = this.productos.find(elem => elem.id === id)
        if (!product) {
            console.error("Not found")
            return
        }
        return product
    }

    addProductos = (title, description, price, thumbnail, code, stock) => {
        //validar la obligatoriedad de los 6 parámetros
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("El producto no puede ser agregado porque faltan datos");
            return
        }
        //validar code no repetido
        if (this.productos.find(elem => elem.code === code)) {
            console.error("El producto no puede ser agregado porque el CODE ya existe");
            return
        }
        const id = this.idCounter
        this.productos.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
        this.idCounter++
    }
}

const productManager = new ProductManager()
productManager.addProductos('Guitarra electrica', 'fende usa 1993', 1500, 'https://www.fuzzfaced.net/uploads/3/8/0/2/38029847/smwewqfuxvtixsqpkm37_orig.jpg', '101010', 5)

productManager.addProductos('Bajo', 'Jazz bass 1995', 4000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9JJXjQsSdYxWeo52GLSxe_f53nzX26yI_w&usqp=CAU', '101011', 3)
productManager.addProductos('bateria', 'mapex', 400, 'http://www.mapx.jpg', '101010', 500)

productManager.addProductos('platillo', 'standbull', 400, 'http://www.standbull.jpg', 500)
console.log(productManager.getProductos())


