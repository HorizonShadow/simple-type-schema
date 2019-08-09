import { schemas } from './data';

export class Schema {
    get schema() {
        return schemas[this.constructor.name]
    }
}