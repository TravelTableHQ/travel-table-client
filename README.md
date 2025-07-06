# Travel Table Client

## 1. 모노레포 구조

이 프로젝트는 모노레포(Monorepo) 구조를 사용하고 있습니다. 모노레포란 여러 개의 프로젝트를 하나의 저장소에서 관리하는 방식입니다.

### 주요 디렉토리 구조:

```
travel-table-client/
├── apps/
│   └── web/              # 메인 웹 애플리케이션
│       ├── src/
│       │   ├── pages/    # 페이지 컴포넌트
│       │   ├── features/ # 기능별 모듈
│       │   └── shared/   # 공통 유틸리티
└── packages/
    ├── ui/              # shadcn 기반 공통 UI 컴포넌트
    ├── theme/           # 디자인 시스템 설정
    └── config/          # 공통 설정 파일
```

## 2. 패키지 관리

### 패키지 매니저

- **pnpm**: 버전 10.12.1
  - 디스크 공간 효율성
  - 엄격한 의존성 관리
  - 빠른 설치 속도

### Workspace 설정

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### 의존성 관리

- `pnpm-lock.yaml`: 패키지 버전 고정
- 워크스페이스 간 의존성 관리
- 패키지 호이스팅 방지

## 3. 개발 도구 설정

### TypeScript

- `tsconfig.base.json`: 기본 TypeScript 설정
- 각 패키지별 개별 `tsconfig.json` 상속 구조
- 엄격한 타입 체크 적용

### ESLint

- `.eslintrc.js`: 코드 품질 관리
- Prettier 통합
- TypeScript 규칙 적용

### Turborepo

- `turbo.json`: 빌드 파이프라인 설정
- 캐싱을 통한 빌드 최적화
- 워크스페이스 간 태스크 의존성 관리

### 주요 스크립트

```json
{
  "dev": "turbo run dev",
  "build": "turbo run build",
  "lint": "turbo run lint",
  "test": "turbo run test",
  "clean": "turbo run clean && rm -rf node_modules"
}
```

## 4. 개발 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm 10.12.1 이상

### 초기 설정

```bash
# 패키지 매니저 설치
npm install -g pnpm

# 프로젝트 클론
git clone https://github.com/your-username/travel-table-client.git
cd travel-table-client

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 전체 개발 서버 실행
pnpm dev

# 특정 앱만 실행
pnpm dev --filter web
```

### 빌드

```bash
# 전체 프로젝트 빌드
pnpm build

# 특정 패키지만 빌드
pnpm build --filter ui
```

## 5. 테마 시스템

### 컬러 시스템

프로젝트의 컬러 시스템은 CSS 변수와 Tailwind CSS를 통해 관리됩니다.

#### 컬러 변수 정의

- 위치: `apps/web/src/index.css`
- 라이트/다크 테마의 모든 기본 컬러가 CSS 변수로 정의되어 있습니다.
- 주요 변수들:
  - `--primary`: 주요 액션 및 브랜드 컬러
  - `--destructive`: 경고 및 삭제 액션
  - `--secondary`: 보조 액션
  - `--muted`: 흐린 텍스트 및 배경
  - `--accent`: 강조 요소
  - 기타 UI 요소별 변수들

#### Tailwind CSS 통합

- 설정 위치: `apps/web/tailwind.config.ts`
- CSS 변수들이 Tailwind 테마로 확장되어 있어 클래스로 쉽게 사용 가능
- 예시: `bg-primary`, `text-destructive` 등

#### UI 컴포넌트 연동

- `packages/ui/components.json`을 통해 UI 컴포넌트 라이브러리와 테마 시스템이 연결
- 모든 UI 컴포넌트가 일관된 테마 시스템 사용

### Tailwind JIT와 모노레포

모노레포 환경에서 Tailwind JIT 컴파일러의 특성을 고려한 설계입니다:

#### 중앙 집중식 스타일 정의의 필요성

- Tailwind JIT는 각 패키지별로 독립적으로 동작하여, 패키지마다 다른 스타일이 생성될 수 있음
- 특히 동적 클래스(예: `bg-[#123456]`)의 경우 패키지별로 다르게 컴파일될 수 있음
- 이를 해결하기 위해 `apps/web/src/index.css`에 모든 컬러 변수를 중앙 집중식으로 정의

#### 설정 공유 방식

- `apps/web/tailwind.config.ts`를 중앙 설정으로 사용
- `packages/ui/components.json`에서 이 설정을 참조하여 일관된 스타일 보장
- 이를 통해 모든 패키지에서 동일한 테마 시스템과 스타일을 공유

#### 장점

- 일관된 스타일 생성
- 중복 CSS 생성 방지
- 번들 크기 최적화
- 유지보수 용이성 향상
