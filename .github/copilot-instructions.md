# Code Shots With Profanis - AI Coding Agent Instructions

## Project Overview

Angular 20 application for YouTube channel content (`profanis-yt`). Uses modern standalone components, signals, and the latest Angular patterns. Project serves as educational content for Angular tutorials.

## Architecture & Patterns

### Standalone Components (Required)

- All components MUST be standalone (`standalone: true` is implicit, don't specify)
- No NgModules - use direct imports in component decorators
- Bootstrap via `bootstrapApplication()` in `src/main.ts`

### Modern Angular Patterns (Angular 20)

- **Control Flow**: Use `@if`, `@for`, `@switch` instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- **Dependency Injection**: Use `inject()` function instead of constructor injection
- **Forms**: Use `input()` and `output()` functions instead of `@Input()` and `@Output()` decorators
- **State Management**: Use signals (`signal()`, `computed()`) for reactive state
- **Change Detection**: Set `changeDetection: ChangeDetectionStrategy.OnPush`

## Development Workflow

### Commands

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
npm run lint       # TSLint validation
```

### Styling & UI

- SCSS as default stylesheet format
- Angular Material integrated (`@angular/material` + CDK)
- Material Icons and Indigo-Pink theme imported in `styles.scss`

### Code Standards

- TypeScript strict mode enabled
- TSLint with Angular-specific rules (see `tslint.json`)
- Prettier formatting configured
- Single quotes, 2-space indentation
- Component prefix: `app-`

## Detailed Guidelines

For specific guidance on different aspects of development, refer to the specialized instruction files in the `.github/copilot/` directory:

- [Angular Best Practices](./instructions/.angular-best-practices.md)

## Development Notes

- YouTube channel focus: Keep code educational and demonstrative
- Test setup uses Jasmine/Karma with RouterTestingModule pattern
