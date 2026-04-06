# Techniques for HPC, a.k.a. our Technology Review
<!-- See the DocMD documentation on https://docs.docmd.io/content/ -->

::: callout warning "Under Construction!"
We are currently working hard on this page! :construction:
:::

- **When Running [SST](https://github.com/sstsimulator) Workloads:**
  - Many workloads inside SST don't get any performance benefits from being ran in multiple threads, but would still consume the CPU cores. Be careful with parallelization, and always measure!

- **When Compiling Workloads with [GCC](gcc.gnu.org):**
  - Don't expect programs to behave the same when using optimization compiler flags such as `-march=native` and `-O3`. It is also not self-evident that using such flags is beneficial.

- **When Managing Many Workloads:**
  - We still have to try out [Slurm](https://slurm.schedmd.com/overview.html)





Here are some elements we can use:

## Quick Start

You are currently viewing `docs/index.md`.

```bash
npm start   # Start the dev server
docmd build # Build for production
```

## Features Demo

### 1. Smart Containers
::: callout tip "Did you know?"
You can nest containers, add custom titles, and use emojis! :tada:
:::

::: card "Flexible Structure"
Organize your content with cards.
::: button "View Documentation" https://docs.docmd.io
:::

### 2. Tabs & Code
::: tabs
== tab "JavaScript"
```javascript
console.log('Hello World');
```

== tab "Python"
```python
print('Hello World')
```
:::

### 3. Plugins (Enabled by Default)
- **Search**
- **Sitemap**
- **SEO Optimization**
- **Analytics**
- **Mermaid Diagrams**
- **LLMs (AI Integration)**

## Next Steps
- **[Official Documentation](https://docs.docmd.io)**
- **[Customize Theme](https://docs.docmd.io/theming/available-themes)**
- **[Deploy Site](https://docs.docmd.io/deployment)**

Happy documenting! 🎉
