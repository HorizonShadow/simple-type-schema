import { prop, getSchema } from "../src";

describe('test', function() {
    class Test {

        @prop() 
        name: string;
    }

    const schema = getSchema(Test);
    const res = schema.validate({
        name: "123"
    });
    console.log(res);
});