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