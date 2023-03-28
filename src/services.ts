import axios from 'axios';

export function getProductsList() {
  return new Promise((resolve, reject) => {
    axios.get('https://dummyjson.com/products/category/groceries')
      .then(d => resolve(d))
      .catch(e => reject(e))
  })
}

export function getProductInfo(id: number | string) {
  return new Promise((resolve, reject) => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(d => resolve(d))
      .catch(e => reject(e))
  })
}