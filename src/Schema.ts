import { schemas, collections } from './data';
import 'meteor/mongo';

export class Schema {
    static get schema() {  
        return schemas[this.constructor.name]
    }

    static get collection() {
        return collections[this.constructor.name];
    }

    static find(selector, options) {
        return this.collection.find(selector, options);
    }

    static findOne(selector, options) {
        return this.collection.findOne(selector, options);
    }

    static insert(doc, callback) {
        return this.collection.insert(doc, callback);
    }

    static update(selector, modifier, options, callback) {
        return this.collection.update(selector, modifier, options, callback);
    }
}