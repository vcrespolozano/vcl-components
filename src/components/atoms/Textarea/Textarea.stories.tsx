import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@components/atoms/Textarea";
import readme from "./Textarea.md?raw";
import { useState } from "react";

// Componente wrapper para usar hooks
function TextareaWrapper(
  props: Omit<React.ComponentProps<typeof Textarea>, "onChange">
) {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      {...(props as React.ComponentProps<typeof Textarea>)}
      value={value}
      onChange={onChange}
    />
  );
}

type StoryMetaType = Omit<Meta<typeof Textarea>, "component"> & {
  component: typeof TextareaWrapper;
};

// Metadatos sobre el componente
const meta: StoryMetaType = {
  title: "Components/atoms/Textarea",
  component: TextareaWrapper,
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
    height: 100,
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
