export const MotherboardCard = ({ mobo }) => {
  return (
    <option value={mobo.num_of_cards_supported}>
      {mobo.name} ({mobo.num_of_cards_supported})
    </option>
  );
};
