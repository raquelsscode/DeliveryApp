import List from './List';

export default function TableList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {products.map((order, index) => (
          <List
            order={ order }
            key={ order.id }
            index={ index }
          />
        ))}
      </tbody>
    </table>
  );
}
