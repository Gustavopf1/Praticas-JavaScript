const listaDePedidos = [];

export const criarPedido = (produto, preco) => {

    const pedido = {
        id: listaDePedidos.length + 1,
        produto: produto,
        preco: preco,
        status: "preparando"
    }
    listaDePedidos.push(pedido);

    return pedido;
}

export const buscarPedidoPorID = (id) => {
    const resultado = listaDePedidos.find((pedido) => pedido.id === Number(id));

    return resultado;
}

export const removerPedido = (id) => {
    const posicao = listaDePedidos.findIndex((pedido) => pedido.id === Number(id));

    if (posicao === -1) {
        return;
    }

    const removidos = listaDePedidos.splice(posicao, 1);
    return removidos[0];
}

export const listarPorStatus = (status) => {
    const resultado = listaDePedidos.filter((pedido) => pedido.status === status);

    return resultado;
}

export const listarProdutos = () => {
    const produtos = listaDePedidos.map((pedido) => pedido.produto);

    return produtos;
}

export const calcularValorTotal = () => {
    const total = listaDePedidos.reduce((acumulador, pedido) => {
        return acumulador + pedido.preco;
    }, 0);

    return total;
}