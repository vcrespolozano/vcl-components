import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@components/atoms/Toast";
import readme from "./Toast.md?raw";
import { useState } from "react";
import { Button } from "@components/atoms/Button";

// Componente wrapper para usar hooks
function ToastDemo() {
  const [toastDesc, setToastDesc] = useState<string>("");

  return (
    <div>
      <Button
        label="Show Toast"
        onClick={() => setToastDesc("Example toast")}
      />
      {toastDesc && (
        <Toast description={toastDesc} onClose={() => setToastDesc("")} />
      )}
    </div>
  );
}

type StoryMetaType = Omit<Meta<typeof Toast>, "component"> & {
  component: typeof ToastDemo;
};

// Metadatos sobre el componente
const meta: StoryMetaType = {
  title: "Components/atoms/Toast",
  component: ToastDemo,
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
  args: {},
};
