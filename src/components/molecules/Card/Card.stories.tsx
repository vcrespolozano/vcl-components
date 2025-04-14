import { Meta, StoryFn } from "@storybook/react";
import { Card } from "@components/molecules/Card";
import { RadioButtonCard } from "./RadioCardButton";
import readme from "./Card.md?raw";
import { useState } from "react";

export default {
  title: "Components/molecules/Card",
  component: Card,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;
const RadioCardTemplate: StoryFn<typeof RadioButtonCard> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex-grid">
      <RadioButtonCard
        {...args}
        title="Radio Button Card 1"
        onChange={handleChange}
        name="radio-example"
        value="radio-1"
        checked={selectedValue === "radio-1"}
      />
      <RadioButtonCard
        {...args}
        title="Radio Button Card 2"
        onChange={handleChange}
        name="radio-example"
        value="radio-2"
        checked={selectedValue === "radio-2"}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: "With Button",
  description: "Description",
  shadow: true,
  rounded: true,
  buttonOnClick: () => alert("Button Clicked"),
  buttonLabel: "Button",
};

export const Blurred = Template.bind({});
Blurred.args = {
  title: "With Button",
  description: "Description",
  shadow: true,
  rounded: true,
  buttonOnClick: () => alert("Button Clicked"),
  buttonLabel: "Button",
  blurred: true,
  borderLess: true,
  neonBorder: true,
};

export const RadioButtonCardExample = RadioCardTemplate.bind({});
RadioButtonCardExample.args = {
  shadow: true,
  rounded: true,
  borderLess: true,
  neonBorder: true,
};
