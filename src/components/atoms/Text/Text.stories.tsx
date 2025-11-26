import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@components/atoms/Text";
import readme from "./Text.md?raw";

const meta = {
  title: "Components/atoms/Text",
  component: Text,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Example text",
  },
};

export const WithProps: Story = {
  args: {
    value: "Example text",
    size: "size_bigTitle",
    weight: "weight_medium",
    kind: "PARAGRAPH",
    display: "display_inline",
    align: "align_center",
    color: "color_main",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
};
