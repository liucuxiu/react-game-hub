import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  selectedSortOrder: string | null
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: '-metacritic', label: 'Popularity' },
    { value: '-released', label: 'Release Date' },
    { value: 'name', label: 'Name' },
    { value: '', label: 'Relevance' },
    { value: '-rating', label: 'Rating' },
    { value: '-added', label: 'Date added' },
  ]
  const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {currentSortOrder?.label || 'Sort'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem onClick={() => onSelectSortOrder(sortOrder.value)}
                    key={sortOrder.value}
                    value={sortOrder.value}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;