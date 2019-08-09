import "reflect-metadata";
import SimpleSchema from 'simpl-schema';
import { schemas, collections } from './data';

export function prop(opts = {}) {
    return (target: any, key: string) => {
        const Type = (Reflect as any).getMetadata('design:type', target, key);
        console.log(target, key, Type.name);
        const name = target.constructor.name;
        const schema = schemas[name] || {};
        let property = schema[key] || {};
        property = {
          ...property,
          ...opts,
          type: Type
        }

        schema[key] = property;
        schemas[name] = schema;
    };
}

export function schema(collection) {
  return function(constructor) {
    const name = constructor.name;
    schemas[name] = new SimpleSchema(schemas[name]);
    connections[name] = collection;
  }
}