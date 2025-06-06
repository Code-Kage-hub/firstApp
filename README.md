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


05/06/25
## 🚀 Understanding Angular Signals

### ❓ Why Use Signals Instead of Just Interpolation?

> *“We use signals for dynamic value updates, but can't we just use data interpolation (`{{ value }}`)?”*

**Interpolation (`{{ }}`)** is used only for displaying values in templates. While Angular updates interpolated values automatically during change detection, it isn't reactive or efficient for complex state management.

**Signals**, introduced in Angular 16, offer a new **reactive state management model** that:

* Tracks dependencies automatically
* Triggers precise re-renders (fine-grained reactivity)
* Eliminates the need for manual `ChangeDetectorRef` or `RxJS`
* Scales better with dynamic UIs

#### 🔍 Comparison

| Feature          | Interpolation (`{{ }}`)       | Signals (`signal()`)              |
| ---------------- | ----------------------------- | --------------------------------- |
| Use case         | Display values                | Track & update dynamic state      |
| Reactivity       | Not reactive by itself        | Fully reactive                    |
| Change detection | Zone-based, checks everything | Fine-grained & efficient          |
| Best for         | Simple or static UI binding   | Dynamic, stateful, interactive UI |

---

## 📘 Signals in Angular: Concepts & Examples

### 1️⃣ What is a Signal?

A **Signal** is a reactive wrapper around a value that notifies its subscribers when the value changes.

```ts
import { signal } from '@angular/core';

const counter = signal(0); // Signal holding number 0
```

---

### 2️⃣ How to Create and Update a Signal?

#### ✅ Creating a Signal:

```ts
import { signal } from '@angular/core';

const name = signal('John');
```

#### 🔁 Updating a Signal using `set()`:

```ts
name.set('Doe'); // replaces current value with 'Doe'
```

#### 🔁 Updating using `update()`:

```ts
const counter = signal(0);
counter.update(prev => prev + 1); // increases current value by 1
```

---

### 3️⃣ How to Access Signal Value?

To **read** the current value of a signal, use **function call syntax**:

```ts
console.log(name()); // prints: 'Doe'
```

In templates, Angular automatically unwraps signals:

```html
<p>{{ name }}</p> <!-- will print 'Doe' -->
```

---

### 4️⃣ `set()` vs `update()` Methods

| Method     | Purpose                             | Example                     |
| ---------- | ----------------------------------- | --------------------------- |
| `set()`    | Replace the current value directly  | `signal.set(newValue)`      |
| `update()` | Modify value based on current value | `signal.update(v => v + 1)` |

#### ✅ Example:

```ts
const score = signal(10);

score.set(20);           // sets score to 20
score.update(v => v + 5); // updates to 25
console.log(score());     // → 25
```

---

### 🧠 Summary

* **Signals** are powerful tools for managing and reacting to state changes.
* They work well with **onPush** change detection and **standalone components**.
* Signals give you **precise control over state and updates**, improving app performance.

## 🔗 Linked Signals in Angular

### 1️⃣ What is a Linked Signal?

A **Linked Signal** is a reactive signal derived (or computed) from one or more other signals. It automatically **recalculates its value** whenever the dependent signal(s) change.

This allows you to keep derived data in sync without manually watching or recalculating it—**perfect for reactive state derivation.**

> Think of it as a computed value that updates automatically when dependencies change.

---

### 2️⃣ How to Create a Linked Signal?

You create a Linked Signal using the `computed()` function from Angular's signals API.

### ✅ Syntax:

```ts
import { signal, computed } from '@angular/core';

const basePrice = signal(100);
const tax = signal(0.18);

// Linked signal
const totalPrice = computed(() => basePrice() + basePrice() * tax());
```

Now `totalPrice` will always stay updated based on `basePrice` and `tax`.

### ✅ Usage in Template:

```html
<p>Base: {{ basePrice }}</p>
<p>Tax: {{ tax }}</p>
<p>Total: {{ totalPrice }}</p>
```

---

### 3️⃣ What is `computation` and `equal` in Linked Signal?

When you define a `computed()` (i.e., a linked signal), Angular lets you optionally pass:

* A **`computation`** function (mandatory) – This is the main logic to compute the value based on dependencies.
* An **`equal`** function (optional) – This checks if the *new computed value* is **equal** to the previous one to avoid unnecessary updates.

### ✅ Example with `equal`:

```ts
const price = signal(100);

const discountedPrice = computed({
  compute: () => price() * 0.9,
  equal: (prev, next) => Math.abs(prev - next) < 0.01 // skip if difference < 0.01
});
```

This prevents minor floating-point changes from triggering updates, improving performance.

---

### 🧠 Summary

| Feature       | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `computed()`  | Create a value that reacts to one or more signals   |
| `computation` | Function that returns a value based on dependencies |
| `equal`       | Optional comparator to prevent unnecessary updates  |

---

### 📌 Final Notes

* Linked signals are **pure and stateless**.
* Great for **derived values**, such as filtering lists, totals, or derived UI state.
* Automatically cleaned up and optimized by Angular’s **reactivity graph**.

---
06/06

## 🌟 Template Reference Variable with `ngModel` in Angular

### 🔸 Topics Covered:

* Template Reference Variable (`#var`)
* `ngModel` directive
* Two-way data binding (`[(ngModel)]`)
* Form validation
* Real-world analogy

---

### 🔹 What is `#fname="ngModel"`?

In Angular, `#fname="ngModel"` is a **template reference variable** that gives you access to the **NgModel directive instance**, not the HTML element itself. This allows you to track and react to the state of the input field (e.g., whether it's valid, touched, or what value it holds).

---

### 🧠 Real-World Analogy:

Imagine filling out a bank form. The paper is the input box (`<input>`), and a clerk watches your actions:

* The **clerk** = `ngModel`
* The **input name field** = `<input>`
* Saying `#fname="ngModel"` is like saying:

  > "Let me get live updates from the clerk about this input’s value and whether it’s correctly filled."

---

### ✅ Example:

```html
<form #myForm="ngForm">
  <input type="text" name="fname" [(ngModel)]="firstName" #fname="ngModel" required>

  <p *ngIf="fname.invalid && fname.touched" style="color:red;">
    Name is required!
  </p>

  <p>Status: {{ fname.valid ? 'Valid' : 'Invalid' }}</p>
  <p>Value: {{ fname.value }}</p>

  <button [disabled]="myForm.invalid">Submit</button>
</form>
```

### 📌 Key Features:

* `[(ngModel)]="firstName"` binds the input to a component property.
* `#fname="ngModel"` provides access to the input’s validation and value state.
* `fname.valid`, `fname.touched`, and `fname.value` are used for form feedback.

This setup helps create dynamic, user-friendly forms with real-time validation feedback.

### 📘 What is a Reactive Form in Angular?

A **Reactive Form** is one of the two ways to build forms in Angular. Unlike Template-driven forms, **Reactive Forms** give you **full control over form logic in your component class** using TypeScript. This method is **more scalable, testable, and predictable**, making it suitable for complex and dynamic forms.

---

### 🔍 Key Features of Reactive Forms:

* Form model is created in the **TypeScript class**, not in the template.
* Uses **`FormControl`**, **`FormGroup`**, and **`FormArray`** for building form structures.
* Supports **synchronous and asynchronous validation**.
* Easily **testable and scalable** for large apps.
* Built using **Observable-based APIs**, providing better reactivity and change tracking.

---

### 📦 Basic Example:

#### ✅ Component Class (TypeScript):

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
```

#### ✅ Template (HTML):

```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <label>Email:</label>
  <input type="email" formControlName="email">
  <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
    Email is required and must be valid.
  </div>

  <label>Password:</label>
  <input type="password" formControlName="password">
  <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
    Password is required.
  </div>

  <button [disabled]="loginForm.invalid">Login</button>
</form>
```

---

### 🧠 Real-World Analogy:

Think of **Reactive Forms** like building a form using code-first logic — as if you’re writing backend validation rules, but in the frontend. You control every field’s behavior, rules, and structure programmatically — making it **developer-driven**.

---

### 📌 Topics Used:

* `FormGroup`
* `FormControl`
* `Validators`
* `[formGroup]`, `formControlName`
* `ngSubmit` event
* Form validation handling

---
