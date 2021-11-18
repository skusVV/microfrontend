import { createApp} from 'vue';
import Dashboard from './components/Dashboard';

const mount = (el) => {
    const app = createApp(Dashboard);

    app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('._dashboard-dev-root');

    if (element) {
        mount(element);
    }
}

export { mount };