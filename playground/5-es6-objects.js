// Object property shorthand

const name = "Daniel"
const userAge = 28

const user = {
   name,
   age: userAge,
   location: 'Antwrep'
}

// Object destructuring

const product = {
   label: 'Red notebook',
   price: 3,
   stock: 201,
   salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock } = product

const transaction = (type, { label, stock }) => {
   console.log(type, label, stock)
}

transaction('order', product)