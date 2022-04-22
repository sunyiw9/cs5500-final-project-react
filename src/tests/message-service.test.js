
import{
    sendMessage,findAllMessagesBetweenUsers,deleteOneMessage
}from "../services/message-service";

import{
    createUser, deleteUsersByUsername
}from "../services/users-service";


describe('can send message with REST API', () =>{
    const sampleMessage ={
        message:"test message",

    }
    let mid;
    let sampleUser1 ={
        username:'sample user 1',
        password:'123',
        email:'123'
    }
    let sampleUser2 = {
        username:'sample user 2',
        password:'234',
        email:'234'
    };

    beforeAll(()=> {
        let promises =[]
        promises.push(deleteUsersByUsername(sampleUser1.username))
        promises.push(deleteUsersByUsername(sampleUser2.username))
        return Promise.all(promises);

    })

    afterAll(()=>{
        let promises =[]
        promises.push(deleteUsersByUsername(sampleUser1.username))
        promises.push(deleteUsersByUsername(sampleUser2.username))
        promises.push(deleteOneMessage(mid));
        return Promise.all(promises);
        })

    test('can insert new message with REST API', async() =>{
        const newUser1 = await createUser(sampleUser1);
        const newUser2 = await createUser(sampleUser2);
        const newMessage = await sendMessage(newUser1._id, newUser2._id, sampleMessage);
        mid = newMessage._id

        expect(newMessage.message).toEqual(sampleMessage.message);
        expect(newMessage.from).toEqual((newUser1._id))
        expect(newMessage.to).toEqual(newUser2._id)
    })
});

describe('can delete message with REST API', () =>{
    const sampleMessage ={
        message:"test message",

    }
    let mid;
    let sampleUser1 ={
        username:'sample user 1',
        password:'123',
        email:'123'
    }
    let sampleUser2 = {
        username:'sample user 2',
        password:'234',
        email:'234'
    };

    afterAll(()=>{
        let promises =[]
        promises.push(deleteUsersByUsername(sampleUser1.username))
        promises.push(deleteUsersByUsername(sampleUser2.username))
        promises.push(deleteOneMessage(mid));
        return Promise.all(promises);
    })

    test('can delete a message with REST API', async() =>{
        const newUser1 = await createUser(sampleUser1);
        const newUser2 = await createUser(sampleUser2);
        const newMessage = await sendMessage(newUser1._id, newUser2._id, sampleMessage);
        mid = newMessage._id
        const status = await deleteOneMessage(mid)
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);
    })
});
