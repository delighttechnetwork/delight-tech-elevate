import sys

with open('src/routeTree.gen.ts', 'r') as f:
    content = f.read()

target = """import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}"""

if target in content:
    print("Found target, removing...")
    content = content.replace(target, "")
else:
    print("Target not found exactly.")

with open('src/routeTree.gen.ts', 'w') as f:
    f.write(content.strip() + "\n")
