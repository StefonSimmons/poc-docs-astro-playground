/**
 * classListFactory
 *
 * Returns a `cl` helper that applies both a semantic BEM class and its
 * corresponding hashed CSS module class simultaneously.
 *
 * Usage:
 *   import styles from './MyComponent.module.css';
 *   import { classListFactory } from '../../utils/classListFactory';
 *
 *   const cl = classListFactory(styles);
 *
 *   // Usage: In astro file:
 *   <div class={cl('my-block', 'my-block--modifier')}>
 */
export function classListFactory(styles: Record<string, string>) {
  return function cl(...classNames: string[]): string {
    return classNames
      .flatMap((name) => {
        const hashed = styles[name];
        return hashed ? [name, hashed] : [name];
      })
      .join(' ');
  };
}
