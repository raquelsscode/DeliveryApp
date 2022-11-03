import TableList from '../componentes/TableList';

export default function CheckoutPage() {
  <>
    <section>
      vai ter um header bolado aqui
      <h1>Finalizar Pedido</h1>
    </section>
    <section>
      <TableList />
    </section>
    <section>
      <span>Total:</span>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {total}
      </span>
    </section>
    <section>
      <h2>Detalhes e Endereço para Entrega</h2>
    </section>
  </>;
}
