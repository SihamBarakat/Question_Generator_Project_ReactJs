import React, { useState } from 'react';

function SelectMultipleOptions() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (e) => {
    const options = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedOptions(options);
  };

  return (
    <select multiple value={selectedOptions} onChange={handleSelectChange}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
}

export default SelectMultipleOptions;