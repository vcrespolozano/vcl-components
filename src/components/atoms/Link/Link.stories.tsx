import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@components/atoms/Link";
import readme from "./Link.md?raw";

const meta = {
  title: "Components/atoms/Link",
  component: Link,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => alert("Link clicked"),
    children: "Click me",
  },
};
