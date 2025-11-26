# VCL Components

**VCL Components** es una librería de componentes React construida con TypeScript, Vite y SCSS, diseñada para ofrecer componentes reutilizables y consistentes siguiendo la metodología Atomic Design.

## 📦 Instalación

Para instalar la librería en tu proyecto:

```bash
npm install @vcrespolozano/vcl-components
```

Asegúrate de tener configurado el registro de GitHub Packages si es necesario (ver `.npmrc` en tu proyecto consumidor).

## 🚀 Uso

Importa los componentes directamente en tu aplicación React:

```tsx
import { Button, Input } from "@vcrespolozano/vcl-components";

function App() {
  return (
    <div>
      <Input placeholder="Escribe algo..." />
      <Button label="Enviar" onClick={() => console.log("Click!")} />
    </div>
  );
}
```

## 🛠️ Desarrollo y Contribución

Si deseas contribuir al desarrollo de esta librería, crear nuevos componentes o modificar los existentes, por favor consulta nuestra guía detallada:

👉 **[Guía de Contribución y Desarrollo (CONTRIBUTING.md)](./CONTRIBUTING.md)**

Allí encontrarás información sobre:
- Cómo configurar el entorno local.
- Cómo usar **Storybook** para desarrollar componentes aislados.
- La estructura del proyecto (Atomic Design).
- Cómo crear nuevos átomos y moléculas.
- Buenas prácticas y convenciones de estilo.

## 📄 Licencia

[MIT](LICENSE) (o la licencia que corresponda)
