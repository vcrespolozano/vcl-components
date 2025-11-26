import type { Meta, StoryObj } from "@storybook/react";
import { HoverableColumn } from "@components/molecules/HoverableColumn";
import readme from "./HoverableColumn.md?raw";
import { FaReact } from "react-icons/fa";

const meta = {
  title: "Components/molecules/HoverableColumn",
  component: HoverableColumn,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HoverableColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description:
      "Occaecat amet cillum ipsum eu cillum est qui laboris mollit. Proident sint fugiat nulla sit dolore. Eiusmod sunt laboris deserunt ex ex ea proident labore do eiusmod eiusmod. Sint esse nulla enim ut esse laboris. Eiusmod elit voluptate ex id enim aliqua nisi ullamco fugiat mollit adipisicing id culpa.",
    icon: <FaReact size={36} />,
    align: "left",
  },
};
