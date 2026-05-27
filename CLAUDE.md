# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 21 application (`profanis-yt`) for the "Code Shots With Profanis" YouTube channel. Serves as educational content demonstrating modern Angular patterns. Not an Nx monorepo — standard Angular CLI project.

## Commands

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run Jest tests
npm run lint       # TSLint validation
npm run e2e        # Protractor e2e tests
```

To run a single test file, use:
```bash
npx ng test --testFile=src/app/app.component.spec.ts
```

## Architecture

- **Bootstrap**: `bootstrapApplication()` in `src/main.ts` (no NgModules anywhere)
- **Styling**: SCSS, Angular Material 21 (Indigo-Pink theme) + Angular CDK + Bootstrap 4
- **Testing**: Jest 30 + @ngneat/spectator + Jasmine matchers; use `createComponentFactory()` pattern
- **State**: Signals (`signal()`, `computed()`, `linkedSignal()`) — no NgRx or other state library

## Angular Patterns (Required)

- **Standalone components only**: Do NOT set `standalone: true` — it is the implicit default
- **Control flow**: Use `@if`, `@for`, `@switch` — never `*ngIf`, `*ngFor`, `*ngSwitch`
- **DI**: Use `inject()` function — never constructor injection
- **Inputs/Outputs**: Use `input()` and `output()` functions — never `@Input()`/`@Output()` decorators
- **Change detection**: Always set `changeDetection: ChangeDetectionStrategy.OnPush`
- **Host bindings**: Use `host: {}` in `@Component`/`@Directive` — never `@HostBinding`/`@HostListener`
- **Images**: Use `NgOptimizedImage` for all static images (not inline base64)
- **Class/style bindings**: Use `[class]` and `[style]` bindings — never `ngClass` or `ngStyle`
- **Services**: Use `providedIn: 'root'` for singletons
- **Signal updates**: Use `.update()` or `.set()` — never `.mutate()`
- **Forms**: Prefer Reactive forms over Template-driven
- **Lazy loading**: Implement for feature routes

## Available Skills

Use `/` to invoke these project-linked skills for specialized Angular guidance:

- `angular-component` — standalone components, OnPush, host bindings, content projection
- `angular-di` — `inject()`, injection tokens, provider configuration
- `angular-directives` — attribute/structural directives, DOM manipulation
- `angular-forms` — Signal Forms API, reactive forms, validation
- `angular-http` — `resource()`, `httpResource()`, `HttpClient`, interceptors
- `angular-routing` — lazy loading, functional guards, resolvers, route parameters
- `angular-signals` — `signal()`, `computed()`, `linkedSignal()`, effects
- `angular-ssr` — SSR setup, hydration, prerendering, browser-only API handling
- `angular-tooling` — Angular CLI, code generation, build/test configuration

## Code Standards

- TypeScript strict mode enabled (no `any`, use `unknown` when uncertain)
- Component selector prefix: `app-`
- Single quotes, 2-space indentation, max 140-character lines
- No non-null assertions (`!`)
