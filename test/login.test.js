import assert from assert;
import login from "../utils/login.mjs";

it("Login API should return a valid login token", async ()=>{ 

    const loginToken= await login({userName:"gai18003@byui.edu", password:"Radar123!"});
    assert.equal(loginToken.length,36);

});