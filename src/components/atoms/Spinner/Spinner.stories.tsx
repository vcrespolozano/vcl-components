import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@components/atoms/Spinner";
import readme from "./Spinner.md?raw";

// Metadatos sobre el componente
const meta = {
  title: "Components/atoms/Spinner", // Categoría y nombre
  component: Spinner,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variaciones de la plantilla
export const Default: Story = {
  args: {},
};
