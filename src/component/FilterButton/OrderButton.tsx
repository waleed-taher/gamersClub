interface OrderButtonProps {
  onClick: (order: string) => void;
}
const ordering = [
  {
    value: "added",
    label: "Date Added",
  },
  {
    value: "created",
    label: "Date Created",
  },
  {
    value: "updated",
    label: "Updated",
  },
  {
    value: "rating",
    label: "Average Rating",
  },
  {
    value: "metacritic",
    label: "Popularity",
  },
];
const OrderButton = ({ onClick }: OrderButtonProps) => {
  return (
    <select
      name="Sort"
      className="inline-block py-3 border border-gray-300 rounded-lg shadow-sm"
      onChange={(e) => onClick(e.target.value)}
    >
      <option disabled defaultValue="" className="text-gray-500">
        Select an option
      </option>
      {ordering.map((order, idx) => (
        <option key={idx} value={order.value} className="text-gray-900">
          {order.label}
        </option>
      ))}
    </select>
  );
};

export default OrderButton;
