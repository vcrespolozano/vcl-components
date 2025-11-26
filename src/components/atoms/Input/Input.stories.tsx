import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@components/atoms/Input";
import readme from "./Input.md?raw";
import { useState } from "react";

// Componente wrapper para usar hooks
function InputWrapper(
  props: Omit<React.ComponentProps<typeof Input>, "onChange">
) {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      {...(props as React.ComponentProps<typeof Input>)}
      value={value}
      onChange={onChange}
    />
  );
}

type StoryMetaType = Omit<Meta<typeof Input>, "component"> & {
  component: typeof InputWrapper;
};

// Metadatos sobre el componente
const meta: StoryMetaType = {
  title: "Components/atoms/Input",
  component: InputWrapper,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Variaciones de la plantilla
export const Default: Story = {
  args: {
    name: "exampleInput",
    id: "exampleInput",
    placeholder: "Placeholder",
  },
};

export const PlaceholderTurnsLabel: Story = {
  args: {
    name: "exampleInput",
    id: "exampleInput",
    placeholder: "Placeholder",
    placeholderLabel: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    name: "exampleInput",
    id: "exampleInput",
  },
};

export const WithError: Story = {
  args: {
    name: "exampleInput",
    id: "exampleInput",
    placeholder: "Placeholder",
    errorMsg: "Error message",
  },
};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: "Label",
    name: "exampleInput",
    id: "exampleInput",
    placeholder: "Placeholder",
  },
};
