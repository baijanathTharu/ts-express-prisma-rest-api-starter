import App from '@/app';
import validateEnv from '@utils/validateEnv';
import { AuthRoute } from './features/auth/auth.route';
import { IndexRoute } from './features/home/index.route';
import { UsersRoute } from './features/users/users.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
