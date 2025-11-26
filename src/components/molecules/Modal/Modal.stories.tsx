import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@components/molecules/Modal";
import readme from "./Modal.md?raw";
import { useState } from "react";
import { Button } from "@components/atoms/Button";

// Componente wrapper para usar hooks
function ModalDemo(
  props: Omit<React.ComponentProps<typeof Modal>, "visible" | "onClose">
) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="sandbox">
      <Button label="Show Modal" onClick={() => setVisible(true)} />
      <Modal
        {...(props as React.ComponentProps<typeof Modal>)}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}

type StoryMetaType = Omit<Meta<typeof Modal>, "component"> & {
  component: typeof ModalDemo;
};

// Metadatos sobre el componente
const meta: StoryMetaType = {
  title: "Components/molecules/Modal",
  component: ModalDemo,
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
    title: "Default Modal",
    description:
      "Sit do mollit incididunt ut eu incididunt dolore officia dolor laborum anim et pariatur mollit. Pariatur sint occaecat voluptate consequat irure est. Dolore commodo sunt sunt incididunt ullamco ea amet irure. Pariatur mollit qui qui pariatur adipisicing mollit eiusmod elit ullamco. Occaecat quis ipsum est mollit. In magna aliqua laborum fugiat qui ex commodo.",
  },
};
