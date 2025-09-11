
# KK0100

This is a Vite + React project.


## Project Structure

- `src/` - Source code for the React app
  - `App.jsx` - Main application component
  - `KristofferProfile.jsx` - Profile component
- `public/` - Public assets served directly (e.g., profile images like `KrisK.JPEG`)
- `index.html` - Main HTML file
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization
- Update `src/App.jsx` and `src/KristofferProfile.jsx` to modify the main UI.
- Place images (such as profile photos) in the `public/` folder and reference them with `/imagename.ext` in your components.
- Add other assets to `src/assets/` for imports or to `public/` for direct serving.

## License
MIT
