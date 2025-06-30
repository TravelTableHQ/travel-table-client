# Travel Table HQ Monorepo

Turborepo를 사용한 모노레포 구조

## 구조
monorepo/
├── apps/
│   └── web/          # React + Vite + Tailwind
├── packages/
│   ├── ui/           # 공통 UI 컴포넌트
│   ├── config/       # 공통 설정 (ESLint, TypeScript)
│   └── theme/        # 테마 및 색상

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 빌드
pnpm build

# 린트
pnpm lint
기술 스택

Build System: Turborepo
Package Manager: pnpm
Frontend: React 19 + Vite + TypeScript
Styling: Tailwind CSS
Linting: ESLint + Prettier
