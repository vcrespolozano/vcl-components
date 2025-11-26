# Guía de Contribución y Desarrollo

Bienvenido a la documentación de desarrollo de **VCL Components**. Esta guía te ayudará a entender cómo funciona la librería, cómo usar Storybook y cómo crear nuevos componentes siguiendo las convenciones establecidas.

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js (versión recomendada: 18+)
- npm

### Configuración Local
1. Clona el repositorio:
   ```bash
   git clone https://github.com/vcrespolozano/vcl-components.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🚀 Ejecutando el Entorno de Desarrollo

La herramienta principal para el desarrollo de componentes es **Storybook**.

```bash
npm run storybook
```
Esto abrirá Storybook en `http://localhost:6006`, donde podrás ver, probar y documentar tus componentes de forma aislada.

Otros scripts útiles:
- `npm run build`: Compila la librería para producción (genera tipos y bundles).
- `npm run lint`: Ejecuta el linter para asegurar la calidad del código.
- `npm run release`: Ejecuta el script de publicación (asegúrate de tener los permisos necesarios).

## 📂 Estructura del Proyecto

El proyecto sigue la metodología **Atomic Design** para organizar los componentes:

```
src/
├── components/
│   ├── atoms/       # Componentes básicos (Botones, Inputs, Textos...)
│   └── molecules/   # Componentes complejos formados por átomos (Cards, Modales...)
├── styles/          # Estilos globales, variables y mixins
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── global.scss
├── stories/         # Historias globales o documentación general
└── index.ts         # Punto de entrada (exporta todos los componentes)
```

## 🧩 Creando un Nuevo Componente

Para crear un nuevo componente, sigue estos pasos:

### 1. Ubicación
Decide si es un **átomo** (indivisible) o una **molécula** (compuesto). Crea una carpeta con el nombre del componente en PascalCase dentro de `src/components/atoms` o `src/components/molecules`.

**Ejemplo:** `src/components/atoms/MyButton`

### 2. Estructura de Archivos
Dentro de la carpeta del componente, deberías tener al menos estos 3 archivos:

- `index.tsx`: La lógica del componente.
- `MyButton.scss`: Los estilos.
- `MyButton.stories.tsx`: Las historias para Storybook.

### 3. Implementación (`index.tsx`)

```tsx
import React from "react";
import "./MyButton.scss";

export interface MyButtonProps {
  /** Texto a mostrar en el botón */
  label: string;
  /** Callback al hacer click */
  onClick?: () => void;
  /** Estilos adicionales opcionales */
  className?: string;
}

export const MyButton: React.FC<MyButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={`my-button ${className || ""}`} onClick={onClick}>
      {label}
    </button>
  );
};
```

### 4. Estilos (`MyButton.scss`)
Utiliza las variables globales para mantener la consistencia.

```scss
@use "@styles/variables" as *;

.my-button {
  background-color: $color-primary;
  color: $color-white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: $color-primary-shadow;
  }
}
```

### 5. Storybook (`MyButton.stories.tsx`)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./index";

const meta: Meta<typeof MyButton> = {
  title: "Atoms/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Default: Story = {
  args: {
    label: "Click Me",
  },
};
```

### 6. Exportar
Finalmente, exporta tu componente en `src/index.ts` para que sea accesible a los consumidores de la librería.

```typescript
// src/index.ts
export * from "@components/atoms/MyButton";
```

## 💡 Buenas Prácticas y Recomendaciones

1. **Tipado Fuerte**: Define siempre una interfaz `Props` clara para tus componentes. Usa JSDoc (`/** ... */`) en las props para que Storybook genere la documentación automáticamente.
2. **Estilos**:
   - Usa las variables definidas en `src/styles/_variables.scss` para colores, espaciados, etc.
   - Evita "magic numbers" o colores hardcodeados.
   - Considera usar prefijos en tus clases CSS (ej. `vcl-button`) para evitar colisiones con los estilos del proyecto donde se use la librería, o migrar a CSS Modules (`.module.scss`) en el futuro.
3. **Componentes Puros**: Intenta que tus componentes de UI sean "tontos" (stateless) siempre que sea posible, recibiendo datos y callbacks vía props.
4. **Testing Visual**: Usa Storybook para verificar todos los estados de tu componente (loading, disabled, error, etc.).

## 📦 Publicación

El proceso de publicación está automatizado mediante el script `release`.

1. Asegúrate de haber hecho commit de todos tus cambios.
2. Ejecuta:
   ```bash
   npm run release
   ```
   Esto probablemente incrementará la versión y preparará el paquete para ser publicado (revisar `release.js` para detalles específicos).
