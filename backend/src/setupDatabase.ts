import mongoose from 'mongoose';
import colors from 'colors';
import { config } from './config';

export default () => {
	const connect = () => {
		mongoose
			// .connect(`mongodb://127.0.0.1:27017/messengerApp-backend`)
			.connect(`${config.DATABASE_URL}`)
			.then(() => {
				console.log('Successfully connected to database.'.bgWhite.magenta);
			})
			.catch(error => {
				console.log('-------- Error connecting to database --------'.red, error);
				return process.exit(1);
			});
	};
	connect();

	mongoose.connection.on('disconnected', connect);
};
