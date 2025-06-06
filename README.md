# Frontend Design Patterns  
*A collection of essential JavaScript and React design patterns*  
**By [Omar Hawlader](https://github.com/omorhawlader)**  

---

## 🧩 Fundamental Patterns  

### [1. **Module Pattern**](patterns/01-module-pattern/README.md)  
- Keeps code organized in separate blocks  
- Prevents naming conflicts  
- Types: IIFE, ES Modules, Revealing Module  

### 2. **Singleton Pattern**  
- Only one instance exists in the whole app  
- Useful for databases, global state  

### 3. **Factory Pattern**  
- Creates objects without using `new` keyword  
- Two types: Simple Factory, Abstract Factory  

### 4. **Observer (Pub-Sub) Pattern**  
- One object notifies others about changes  
- Like YouTube notifications system  

### 5. **Mediator Pattern**  
- Objects talk through a middleman  
- Reduces direct connections  

### 6. **Prototype Pattern**  
- Creates new objects by cloning existing ones  
- Improves performance  

---

## 🏗 Structural Patterns  

### 7. **Facade Pattern**  
- Simple interface for complex systems  
- Like a restaurant menu  

### 8. **Adapter Pattern**  
- Makes incompatible things work together  
- Like USB adapter for different plugs  

### 9. **Decorator Pattern**  
- Adds features without changing original  
- Like adding toppings to pizza  

### 10. **Proxy Pattern**  
- Controls access to an object  
- Like a security guard  

### 11. **Bridge Pattern**  
- Separates abstraction from implementation  
- Like remote control for different TVs  

### 12. **Composite Pattern**  
- Treats single and group objects the same  
- Like folder/file structures  

---

## ⚙ Behavioral Patterns  

### 13. **Strategy Pattern**  
- Switches between different methods  
- Like different payment options  

### 14. **State Pattern**  
- Object changes behavior when state changes  
- Like traffic lights  

### 15. **Iterator Pattern**  
- Accesses items one by one  
- Like playlist navigation  

### 16. **Command Pattern**  
- Turns requests into objects  
- Enables undo/redo features  

### 17. **Chain of Responsibility**  
- Passes requests through handler chain  
- Like customer support escalation  

### 18. **Memento Pattern**  
- Saves and restores object states  
- Like undo functionality  

### 19. **Visitor Pattern**  
- Adds operations without changing classes  
- Like tax calculations  

### 20. **Template Method**  
- Defines algorithm skeleton  
- Like cooking recipe steps  

---

## ⚛ React-Specific Patterns  

### 21. **HOC Pattern**  
- Wraps components to reuse logic  
- Example: Redux `connect()`  

### 22. **Render Props**  
- Shares code through props  
- Example: `<Data render={data => ...}>`  

### 23. **Custom Hooks**  
- Reusable function components  
- Example: `useFetch()`, `useLocalStorage()`  

### 24. **Context API**  
- Shares data without prop drilling  

### 25. **Compound Components**  
- Components that work together  
- Like `<Select>` and `<Option>`  

---

## 🏙 Architecture Patterns  

### 26. **MVC/MVVM**  
- Separates UI, logic and data  

### 27. **Atomic Design**  
- Breaks UI into tiny reusable pieces  

### 28. **Micro Frontends**  
- Splits big app into smaller apps  

### 29. **Server-Side Rendering**  
- Faster loading with SEO benefits  

### 30. **Flux Pattern**  
- Unidirectional data flow  
- Used in Redux architecture  

---

🔗 *Maintained by [Omar](https://github.com/omorhawlader)*  