04/06
what I Learnt
---

### 1) What is Directive?

* **Directive** is a special class in Angular that **adds behavior to elements** in your Angular applications.
* It can **change the appearance or behavior** of DOM elements.
* Angular has **built-in directives** and you can also **create custom directives**.

---

### 2) What Are Types of Directive?

There are **3 main types** of directives in Angular:

1. **Component Directives**

   * These are the most common. A component is basically a directive with a template.
   * Example: Your Angular components like `<app-root>`

2. **Structural Directives**

   * Change the **structure of the DOM** by adding or removing elements.
   * Example: `*ngIf`, `*ngFor`, `*ngSwitch`

3. **Attribute Directives**

   * Change the **appearance or behavior** of an existing element (without changing the DOM structure).
   * Example: `ngClass`, `ngStyle`, `[disabled]`

---

### 3) What Are Structural Directives?

* Structural directives **change the layout** by **adding or removing elements** in the DOM.
* They usually start with an asterisk (`*`) before the directive name.
* Examples:

  * `*ngIf` — conditionally adds/removes an element.
  * `*ngFor` — repeats an element for each item in a collection.

---

### 4) How to use `*ngIf` Directive?

* `*ngIf` conditionally **shows or hides** an element based on a boolean expression.

**Example:**

```html
<div *ngIf="isLoggedIn">
  Welcome, user!
</div>
```

* Here, the `<div>` will only be in the DOM if `isLoggedIn` is `true`.
* If `isLoggedIn` is `false`, the element is completely removed from the DOM.

---

### 5) How to use `*ngFor` Directive?

* `*ngFor` **loops** through a list/array and creates a template instance for each item.

**Example:**

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

* If `items = ['Apple', 'Banana', 'Cherry']`, this will render:

  * Apple
  * Banana
  * Cherry

---

### 6) How to Hide and Show Element in Angular?

Two common ways:

**Method 1: Using `*ngIf` (adds/removes element)**

```html
<div *ngIf="showElement">I am visible only if showElement is true</div>
```

**Method 2: Using `[hidden]` attribute (only hides element via CSS)**

```html
<div [hidden]="!showElement">I am hidden by CSS if showElement is false</div>
```

* `*ngIf` completely removes or adds the element in DOM.
* `[hidden]` just hides it with CSS (`display: none`) but the element remains in DOM.

---

### 7) How to Create Dynamic Element in Angular?

You can create dynamic elements in Angular by:

* Using `*ngFor` to render lists dynamically.
* Using Angular’s **`ViewContainerRef`** and **`ComponentFactoryResolver`** (advanced) to dynamically create components/elements at runtime.

**Basic dynamic list example with `*ngFor`:**

```html
<div *ngFor="let user of users">
  {{ user.name }}
</div>
```

**Key Differences Between Structural and Control Flow Directives**

| Feature              | `*ngIf`, `*ngFor` (Structural Directives) | `@if`, `@for` (Control Flow Directives) |
| -------------------- | ----------------------------------------- | --------------------------------------- |
| Introduced In        | Angular before v17                        | Angular v17 and above                   |
| Syntax               | Uses `*directive`                         | Uses `@directive { }`                   |
| Readability          | Less readable for nested logic            | Cleaner and easier to read              |
| Uses `ng-template`   | Yes, implicitly                           | No (more direct rendering)              |
| Wrapper Requirement  | Sometimes need wrapping elements          | No wrappers needed                      |
| Debugging Experience | Slightly harder due to `ng-template`      | Better debugging and logic separation   |
| Compatibility        | Works in all Angular versions             | Works only in Angular 17+               |

---
