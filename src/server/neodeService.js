import * as neode from 'neode';
import * as User from './models/User';
import * as Todo from './models/Todo';

const neodeService = neode.fromEnv().with({
	User: User,
	Todo: Todo,
});

export default neodeService;
