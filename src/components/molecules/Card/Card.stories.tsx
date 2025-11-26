import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@components/molecules/Card";
import { RadioButtonCard } from "./RadioCardButton";
import readme from "./Card.md?raw";
import { useState } from "react";
import { DiReact } from "react-icons/di";

// Componente wrapper para RadioButtonCard
function RadioCardDemo() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex-grid">
      <RadioButtonCard
        title="Radio Button Card 1"
        onChange={handleChange}
        name="radio-example"
        value="radio-1"
        checked={selectedValue === "radio-1"}
        shadow={true}
        rounded={true}
        borderLess={true}
        neonBorder={true}
      />
      <RadioButtonCard
        title="Radio Button Card 2"
        onChange={handleChange}
        name="radio-example"
        value="radio-2"
        checked={selectedValue === "radio-2"}
        shadow={true}
        rounded={true}
        borderLess={true}
        neonBorder={true}
      />
    </div>
  );
}

const meta = {
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
};

export const WithButton: Story = {
  args: {
    title: "With Button",
    description: "Description",
    shadow: true,
    rounded: true,
    buttonOnClick: () => alert("Button Clicked"),
    buttonLabel: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    title: "With Icon",
    description: "Description",
    shadow: true,
    rounded: true,
    icon: <DiReact size={36} />,
  },
};

export const Blurred: Story = {
  args: {
    title: "With Button",
    description: "Description",
    shadow: true,
    rounded: true,
    buttonOnClick: () => alert("Button Clicked"),
    buttonLabel: "Button",
    blurred: true,
    borderLess: true,
    neonBorder: true,
  },
};

export const RadioButtonCardExample: Story = {
  render: () => <RadioCardDemo />,
};
