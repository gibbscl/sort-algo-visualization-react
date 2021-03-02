import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Selector = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Select Algorithm
        </DropdownToggle>
            <DropdownItem>
                Merge Sort
            </DropdownItem>
            <DropdownItem>
                Bubble Sort
            </DropdownItem>
            <DropdownItem>
                Quick Sort
            </DropdownItem>
      </Dropdown>
    );
  }

export default Selector;
