import createServer from '../../../../node_types/src/utils/server';
import { MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { createUser } from '../../../../node_types/src/db/users';
let  request = require('supertest');
const app = createServer();

const userId = new mongoose.Types.ObjectId().toString();
export const userBody = {
    email: 'test@test.com',
    authentication: {
        password: 'test',        
    },
    username: 'jest'
}
describe('users', () => {

    // beforeAll(async () => {
    //     const mongoServer = await MongoMemoryServer.create();
    //     await mongoose.connect(mongoServer.getUri());
    // });

    // afterAll(async () => {
    //     await mongoose.disconnect();
    //     await mongoose.connection.close();
    // })
    app.get('/test', function(req, res) {
        res.status(200).json({ name: 'john' });
      });

    describe('test', () => {
        describe('test ', () => {
            test("test",  () => {
                //const user =  await createUser(userBody);
                //console.log(user);
                let url = `http://localhost:8081/users/`;
                
                request(app).get('/test')
                .expect(200,)
                .end(function (err:any, res:any){
                    if (err) throw err;
                    console.log(res);
                    
                });
                
            });
        });
    });
    // describe('test', () => {
    //     describe('test ', () => {
    //         it ("test", async () => {
    //             const userId = "64dd3b62f763549dff3d3dd7";
    //             let url = `http://localhost:8081`;
    //             console.log(url);
                
    //             await supertest(app).get(url).expect(200);
    //         });
    //     });
    // });
});