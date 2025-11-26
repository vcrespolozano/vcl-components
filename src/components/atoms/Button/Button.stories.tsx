import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/atoms/Button";
import readme from "./Button.md?raw";

// Metadatos sobre el componente
const meta = {
  title: "Components/atoms/Button", // Categoría y nombre
  component: Button,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variaciones de la plantilla
export const Default: Story = {
  args: {
    label: "Default Button",
  },
};
