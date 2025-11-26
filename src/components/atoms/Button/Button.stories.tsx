import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/atoms/Button";
import readme from "./Button.md?raw";

// Componente wrapper para manejo de onClick
function ButtonWrapper(
  props: Omit<React.ComponentProps<typeof Button>, "onClick">
) {
  const onClick = () => alert("Button clicked");
  return (
    <Button
      {...(props as React.ComponentProps<typeof Button>)}
      onClick={onClick}
    />
  );
}

type StoryMetaType = Omit<Meta<typeof Button>, "component"> & {
  component: typeof ButtonWrapper;
};

// Metadatos sobre el componente
const meta: StoryMetaType = {
  title: "Components/atoms/Button",
  component: ButtonWrapper,
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
    label: "Default Button",
  },
};
