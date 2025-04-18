import { Meta, StoryFn } from "@storybook/react";
import { Textarea } from "@components/atoms/Textarea";
import readme from "./Textarea.md?raw";
import { useState } from "react";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Textarea", // Categoría y nombre
  component: Textarea,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Textarea>;

// Plantilla base
const Template: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <Textarea {...args} value={value} onChange={onChange} />;
};

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
  height: 100,
};

export const PlaceholderTurnsLabel = Template.bind({});
PlaceholderTurnsLabel.args = {
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
  placeholderLabel: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
  name: "exampleInput",
  id: "exampleInput",
};

export const WithError = Template.bind({});
WithError.args = {
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
  errorMsg: "Error message",
};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: "Label",
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
};
