import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

async function singIn(obj) {
  const { data } = await API.post('/login', obj);
  return data;
}

async function register(obj) {
  const { data } = await API.post('/register', obj);
  return data;
}

async function getProducts(token) {
  const config = {
    headers: {
      authorization: token,
    },
  };

  const { data } = await API.get('/customer/products', config);
  return Object.values(data);
}

async function getSellers() {
  const { data } = await API.get('/sellers');
  return data;
}

async function postOrder(token, obj) {
  const config = {
    headers: {
      authorization: token,
    },
  };

  const { data } = await API.post('/customer/checkout', obj, config);
  return data;
}

export { singIn, register, getProducts, getSellers, postOrder };
