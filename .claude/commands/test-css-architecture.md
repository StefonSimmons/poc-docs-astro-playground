Review the target component(s) for compliance with this project's CSS architecture standards. For each violation found, cite the file, the offending code, and the rule it breaks. If no target is specified, review all components in `src/`.

---

## Standards

### 1. Token-based design

All CSS values for spacing, color, typography, and border must reference a CSS custom property from `src/layouts/styles.css`. Hard-coded values (e.g. `padding: 8px`, `color: #fff`) are a violation.

**Correct:**
```css
.alert {
  padding: var(--space-sm);
  color: var(--color-text);
}
```

**Violation:**
```css
.alert {
  padding: 8px;
  color: #333;
}
```

---

### 2. CSS modules

Every component must have a co-located `.module.css` file. Styles must not be declared inline on Astro components or in a global stylesheet (except for token definitions in `styles.css`).

File structure:
```
src/
  components/
    Alert/
      Alert.astro
      Alert.module.css
      Alert.test.ts      # headless test, if interactive
```

---

### 3. BEM class naming

All CSS classes must follow the BEM convention: `block__element--modifier`.

- **Block** — the component root (e.g. `.nav`)
- **Element** — a part of the block (e.g. `.nav__link`)
- **Modifier** — a variant or state (e.g. `.nav__link--active`)

**Correct:**
```css
.nav { }
.nav__link { }
.nav__link--active { }
```

**Violation:**
```css
.navigation { }
.navLink { }
.active { }
```

---

### 4. The `cl` helper (`classListFactory`)

Markup must never reference CSS module hashed classes directly. Use the `cl` helper from `src/utils/classListFactory.ts`, which applies both the semantic BEM class and the hashed CSS module class simultaneously.

**Correct:**
```astro
---
import styles from './Nav.module.css';
import { classListFactory } from '../utils/classListFactory';
const cl = classListFactory(styles);
---
<nav class={cl('nav')}>
  <a class={cl('nav__link', 'nav__link--active')}>Home</a>
</nav>
```

**Violation:**
```astro
<nav class={styles.nav}>
  <a class={`${styles['nav__link']} ${styles['nav__link--active']}`}>Home</a>
</nav>
```

---

### 5. Active/state classes via BEM modifiers

Component state (active, open, disabled, etc.) must be expressed with a BEM modifier class, not by inspecting individual CSS properties. This keeps tests and logic decoupled from visual implementation details.

**Correct:**
```astro
<a class={isActive ? cl('nav__link', 'nav__link--active') : cl('nav__link')}>
```

**Correct in a test:**
```ts
expect(el.classList.contains('nav__link--active')).toBe(true);
```

**Violation:**
```ts
expect(el.style.fontWeight).toBe('600');
```

---

### 6. `aria-current` on active nav links

Active navigation links must set `aria-current="page"` for accessibility. The BEM modifier and `aria-current` must always be applied together.

**Correct:**
```astro
<a
  class={isActive ? cl('nav__link', 'nav__link--active') : cl('nav__link')}
  aria-current={isActive ? 'page' : undefined}
>
```
