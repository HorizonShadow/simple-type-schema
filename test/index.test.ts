import { prop, schema } from "../src";
import { Schema } from '../src/Schema';

describe('test', function() {

    class Tmp {}

    @schema(Tmp)
    class Test extends Schema {

        @prop() 
        name: string;
    }

    const test = new Test();
    console.log(test.schema);

    // const schema = getSchema(Test);
    // const res = schema.validate({
    //     name: "123"
    // });
    // console.log(res);
});