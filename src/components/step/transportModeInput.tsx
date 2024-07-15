import { transportModeList } from '@/features/steps/add/transportMode.enum';
import { TransportMode } from '@/types/transportMode.type';
import {
  Combobox,
  Group,
  Input,
  InputBase,
  InputBaseProps,
  useCombobox,
} from '@mantine/core';
import { useState } from 'react';
import { TrashIcon } from '../icons/trash.icon';

export type TransportModeInputProps = {
  selectedValue: (value: TransportMode) => void;
} & InputBaseProps;

export const TransportModeInput = ({
  selectedValue,
  ...props
}: TransportModeInputProps) => {
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
        selectedValue(TransportMode.parse(val));
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
              <TrashIcon onClick={() => setValue(null)} />
            ) : (
              <Combobox.Chevron />
            )
          }
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents={value === null ? 'none' : 'all'}
          {...props}
        >
          {value || (
            <Input.Placeholder>
              {transportModeList
                .map((t) => t.name)
                .join(', ')
                .concat(', ...')}
            </Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
