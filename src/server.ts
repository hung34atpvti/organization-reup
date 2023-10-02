import dotenv from 'dotenv';
import serverless from "serverless-http";
import mongoose from 'mongoose';
import app from './app';

const result = dotenv.config()

if (result.error) {
    throw result.error
}

const PORT: number = Number(process.env.PORT);
mongoose.connect(`${ process.env.MONGO_URL }`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Mongo connect successfully!');
    }
});

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

module.exports.handler = serverless(app);