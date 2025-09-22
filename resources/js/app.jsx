// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';

// createInertiaApp({
//   resolve: name => {
//     return import(`./Pages/${name}.jsx`);
//   },
//   setup({ el, App, props }) {
//     createRoot(el).render(<App {...props} />);
//   },
// });
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const appName = 'Laravel';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// // This will set light / dark mode on load...