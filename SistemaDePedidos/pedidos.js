const listaDePedidos = [];

export const criarPedido = (produto, preco) => {

    const novoPedido = {
        id: pedidos.length + 1,
        produto: produto,
        preco: preco,
        status: "preparando"
    }
    listaDePedidos.push(novoPedido);

    return novoPedido;
}