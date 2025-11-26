import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@components/atoms/Image";
import readme from "./Image.md?raw";

// Metadatos sobre el componente
const meta = {
  title: "Components/atoms/Image", // Categoría y nombre
  component: Image,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variaciones de la plantilla
export const Default: Story = {
  args: {
    src: "/img/example.jpg",
    loading: true,
    lazyLoad: true,
    alt: "Example image",
    width: 512,
    height: 512,
    objectFit: "cover",
  },
};
