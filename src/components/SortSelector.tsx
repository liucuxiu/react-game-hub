import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Order
      </MenuButton>
      <MenuList>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Rating</MenuItem>
        <MenuItem>Date added</MenuItem>

      </MenuList>
    </Menu>
  );
};

export default SortSelector;