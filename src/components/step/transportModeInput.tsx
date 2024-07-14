import { transportModeList } from '@/features/steps/add/transportMode.enum';
import {
  CloseButton,
  Combobox,
  Group,
  Input,
  InputBase,
  useCombobox,
} from '@mantine/core';
import { useState } from 'react';

export type TransportModeInputProps = {};

export const TransportModeInput = ({}: TransportModeInputProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = transportModeList.map((option) => (
    <Combobox.Option value={option.name} key={option.name}>
      <Group>
        {option.icon}
        {option.name}
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          leftSection={
            value !== null
              ? transportModeList.find((t) => t.name === value)?.icon
              : null
          }
          rightSection={
            value !== null ? (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setValue(null)}
                aria-label="Clear value"
              />
            ) : (
              <Combobox.Chevron />
            )
          }
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents={value === null ? 'none' : 'all'}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
