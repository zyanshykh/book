# Tasks: Docusaurus Documentation Setup

**Input**: Design documents from `/specs/001-docusaurus-docs/`
**Prerequisites**: plan.md (complete), spec.md (complete), data-model.md (complete), quickstart.md (complete)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Infrastructure)

**Purpose**: Initialize Docusaurus project with required dependencies

- [ ] T001 Create docs/ directory structure at repository root
- [ ] T002 [P] Run `npx create-docusaurus@latest docs classic` to initialize project
- [ ] T003 [P] Install Mermaid plugin: `npm install --save @docusaurus/theme-mermaid`
- [ ] T004 Verify Node.js version is 20.0 or higher

**Checkpoint**: Docusaurus initialized, `npm run start` works locally

---

## Phase 2: Configuration (Blocking Prerequisites)

**Purpose**: Configure Docusaurus for sidebars, Mermaid, and navigation

**CRITICAL**: No user story work until this phase is complete

- [ ] T005 Edit `docusaurus.config.js` to enable Mermaid in markdown config
- [ ] T006 Add `@docusaurus/theme-mermaid` to themes array in config
- [ ] T007 Configure Mermaid theme (light: neutral, dark: forest) in themeConfig
- [ ] T008 Configure `sidebars.js` with auto-generated sidebar from docs/ directory
- [ ] T009 Create root `_category_.json` with proper label and position
- [ ] T010 Create `tutorial-basics/` directory with `_category_.json`
- [ ] T011 Create `tutorial-advanced/` directory with `_category_.json`
- [ ] T012 Run `npm run build` to verify configuration works

**Checkpoint**: Configuration complete - all features working

---

## Phase 3: User Story 1 - Initialize Docusaurus Project (Priority: P1)

**Goal**: Docusaurus project initialized and verified working

**Independent Test**: `npm run build` produces static site in build/ without errors

### Validation for User Story 1

- [ ] T013 [US1] Run `npm run build` and verify build/ directory is created
- [ ] T014 [US1] Run `npm run serve` and verify site loads at localhost:5000

### Implementation for User Story 1

- [ ] T015 [US1] Create intro.md in docs/ with welcome content
- [ ] T016 [US1] Customize site title and tagline in docusaurus.config.js

**Checkpoint**: User Story 1 complete - Docusaurus initialized and builds

---

## Phase 4: User Story 2 - Configure Sidebar Navigation (Priority: P1)

**Goal**: Sidebar navigation displays all docs with correct hierarchy

**Independent Test**: Sidebar shows all MD/MDX files with proper nesting

### Validation for User Story 2

- [ ] T017 [US2] Navigate to docs pages and verify sidebar appears
- [ ] T018 [US2] Click sidebar items and verify navigation works
- [ ] T019 [US2] Add new file to docs/ and verify it appears in sidebar

### Implementation for User Story 2

- [ ] T020 [US2] Create docs/getting-started.md
- [ ] T021 [US2] Add docs/tutorial-basics/installation.md
- [ ] T022 [US2] Add docs/tutorial-basics/configuration.md
- [ ] T023 [US2] Customize category labels in _category_.json files

**Checkpoint**: User Story 2 complete - Sidebar navigation working

---

## Phase 5: User Story 3 - Add Interactive MDX Elements (Priority: P1)

**Goal**: React components render correctly in MDX files

**Independent Test**: Custom components display without errors during `npm start`

### Validation for User Story 3

- [ ] T024 [US3] Create test MDX file with React component import
- [ ] T025 [US3] Verify component renders in browser during dev server
- [ ] T026 [US3] Verify hot reload works when component changes

### Implementation for User Story 3

- [ ] T027 [US3] Create src/components/Hero.jsx with sample component
- [ ] T028 [US3] Create src/components/Callout.jsx for documentation callouts
- [ ] T029 [US3] Add interactive component demo to docs/intro.md

**Checkpoint**: User Story 3 complete - MDX components working

---

## Phase 6: User Story 4 - Integrate Mermaid Diagrams (Priority: P1)

**Goal**: Mermaid code blocks render as visual diagrams

**Independent Test**: Mermaid diagrams display as graphics, not code blocks

### Validation for User Story 4

- [ ] T030 [US4] Create test.md with flowchart diagram
- [ ] T031 [US4] Verify diagram renders as SVG in browser
- [ ] T032 [US4] Test sequence diagram rendering
- [ ] T033 [US4] Test dark mode diagram theme

### Implementation for User Story 4

- [ ] T034 [US4] Add architecture diagram to docs/intro.md using Mermaid
- [ ] T035 [US4] Add flowchart example to docs/tutorial-basics/installation.md
- [ ] T036 [US4] Add sequence diagram example to docs/tutorial-advanced/configuration.md

**Checkpoint**: User Story 4 complete - Mermaid diagrams rendering

---

## Phase 7: User Story 5 - Enable Table of Contents (Priority: P2)

**Goal**: TOC appears on pages with multiple headings

**Independent Test**: Right-side TOC with links to H2/H3 headings

### Validation for User Story 5

- [ ] T037 [US5] Create long doc with 4+ headings and verify TOC appears
- [ ] T038 [US5] Click TOC links and verify smooth scroll to section
- [ ] T039 [US5] Scroll to section and verify TOC item highlights

### Implementation for User Story 5

- [ ] T040 [US5] Add TOC front matter customization to docs/intro.md
- [ ] T041 [US5] Create docs/tutorial-basics/installation.md with 5+ headings
- [ ] T042 [US5] Test TOC with different heading level configurations

**Checkpoint**: User Story 5 complete - TOC working

---

## Phase 8: User Story 6 - Organize Content Structure (Priority: P2)

**Goal**: Clean file structure with intuitive sidebar organization

**Independent Test**: File structure is clean and sidebar reflects organization

### Validation for User Story 6

- [ ] T043 [US6] Rename a file and verify sidebar updates
- [ ] T044 [US6] Move file between directories and verify sidebar updates
- [ ] T045 [US6] Run build and verify all files processed

### Implementation for User Story 6

- [ ] T046 [US6] Create docs/_category_.json with proper ordering
- [ ] T047 [US6] Create docs/tutorial-basics/_category_.json with ordering
- [ ] T048 [US6] Create docs/tutorial-advanced/_category_.json with ordering
- [ ] T049 [US6] Add index.md to tutorial-basics/ as category landing

**Checkpoint**: User Story 6 complete - Content organized

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and validation

- [ ] T050 [P] Update README.md with Docusaurus setup instructions
- [ ] T051 [P] Add .gitignore entries for build/ and node_modules/
- [ ] T052 Customize theme colors in src/css/custom.css
- [ ] T053 Run full validation against quickstart.md steps
- [ ] T054 Verify all success criteria from spec.md pass

---

## Dependencies & Execution Order

### Phase Dependencies

| Phase | Depends On | Blocks |
|-------|-----------|--------|
| Setup (1) | None | Configuration |
| Configuration (2) | Setup | All User Stories |
| User Stories (3-8) | Configuration | Polish |
| Polish (9) | User Stories | Complete |

### User Story Dependencies

| Story | Can Start After |
|-------|----------------|
| US1 (Initialize) | Configuration complete |
| US2 (Sidebar) | Configuration complete |
| US3 (MDX) | Configuration complete |
| US4 (Mermaid) | Configuration complete |
| US5 (TOC) | Configuration complete |
| US6 (Organization) | Configuration complete |

### Parallel Opportunities

- T002, T003, T004 can run in parallel
- T005-T012 can run in parallel
- All user story implementations (T015-TT049) can run in parallel after Phase 2
- T050, T051 can run in parallel

---

## Implementation Strategy

### MVP First (Stories 1-4)

1. Complete Phases 1-2 (Setup + Configuration)
2. Complete Stories 1-4 (P1 stories)
3. **STOP and VALIDATE**: Test all 4 stories independently
4. Deploy/demo if ready

### Incremental Delivery

1. Setup + Configuration → Foundation ready
2. Add Story 1 → Test → Deploy/Demo
3. Add Story 2 → Test → Deploy/Demo
4. Add Story 3 → Test → Deploy/Demo
5. Add Story 4 → Test → Deploy/Demo
6. Add Stories 5-6 → Test → Deploy/Demo

---

## Success Criteria Validation

| Criteria | Task | Status |
|----------|------|--------|
| SC-001: `npm run build` succeeds | T012, T053 | Pending |
| SC-002: All MD/MDX files render | All stories | Pending |
| SC-003: Mermaid diagrams render | T030-T036 | Pending |
| SC-004: Sidebar navigation works | T017-T023 | Pending |
| SC-005: TOC appears on pages | T037-T042 | Pending |
| SC-006: MDX components render | T024-T029 | Pending |
