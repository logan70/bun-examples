# bun-examples

Bun 各类示例.

<p align="center">
  <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=170></a>
</p>

## 示例

首先确认已安装项目依赖：

```sh
bun install
```

### 示例-Http服务

启动http服务

```sh
bun run examples/http-base/index.ts
```

然后打开不同url，查看不同类型的返回数据或效果

- 基础示例: http://localhost:3000
- 文件响应: http://localhost:3000/README.md
- 主动停止服务: http://localhost:3000/admin/stop

### 示例-React

```sh
cd examples/react
bun install

bun dev
```

然后打开 http://localhost:3000 查看效果

### 示例-React + Typescript

```sh
cd examples/react-typescript
bun install

bun dev
```

然后打开 http://localhost:3000 查看效果

### 示例-React SSR

```sh
bun install

bun run examples/react-ssr/index.tsx
``` 

然后打开 http://localhost:3000 查看效果

### 示例-Next.js

```sh
cd examples/next
bun install

bun dev
```

然后打开 http://localhost:3000 查看效果
