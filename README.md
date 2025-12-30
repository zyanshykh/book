# AI-Book-Systems

Learn about multi-agent AI systems through this interactive documentation.

## About This Project

This is an educational resource covering multi-agent AI systems, including:

- **Introduction** - Core concepts of autonomous agents
- **Architectures** - Hierarchical, peer-to-peer, and supervisor-worker patterns
- **Working Example** - Practical implementation guide
- **Best Practices** - Guidelines for building robust systems
- **Exercises** - Hands-on challenges to test your knowledge

## Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Starts the local development server at `http://localhost:3000`.

### Build for Production

```bash
npm build
```

Generates static content in the `build` directory.

### Preview Production Build

```bash
npm run serve
```

## Deployment

Deploy to GitHub Pages:

```bash
# Using SSH
USE_SSH=true npm deploy

# Or using GitHub username
GIT_USER=<Your GitHub username> npm deploy
```

## Project Structure

```
docs/
├── multi-agent-systems/
│   ├── 01-introduction.md    # Core concepts
│   ├── 02-architectures.md   # Architecture patterns
│   ├── 03-example.md         # Practical example
│   ├── 04-best-practices.md  # Guidelines
│   ├── 05-exercises.md       # Challenges
│   └── 06-summary.md         # Chapter summary
```

## Tech Stack

- [Docusaurus](https://docusaurus.io/) - Static site generator
- [Mermaid](https://mermaid.js.org/) - Diagrams as code
- React + Markdown

## Contributing

Contributions welcome! Feel free to open issues or submit PRs.

## License

MIT
