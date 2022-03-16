import axios from 'axios';

const clientesEndPoint = 'http://localhost:8080/clientes/';

export function getClientes() {
    return axios.get(clientesEndPoint); // Devuelve una promesa
}

export function searchClientes(term) {
    return axios.get(clientesEndPoint + 'search/' + term);
}

export function getClienteById(_id) {
    return axios.get(clientesEndPoint + _id);
}

export function setCliente(cliente) {
    return axios.post(clientesEndPoint, cliente);
}

