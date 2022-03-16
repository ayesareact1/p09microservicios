import axios from 'axios';

const clientes = [];

const clientesEndPoint = 'http://localhost:8080/clientes/';

export function getClientes() {
    return axios.get(clientesEndPoint); // Devuelve una promesa
}

export function searchClientes(term) {
    return axios.get(clientesEndPoint + 'search/' + term);
}

export function getClienteByCif(cif) {
    return clientes.filter(cliente => cliente.cif === cif)[0];
}

export function setCliente(cliente) {
    clientes.push(cliente);
}

