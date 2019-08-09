import "reflect-metadata";

export function prop() {
    return (target: any, key: string) => {
        const Type = (Reflect as any).getMetadata('design:type', target, key);
    
        if (!Type) {
          // no type
        }
    
      };
}