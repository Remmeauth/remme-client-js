export class JsonObject {
    public static fromJson<T>(jsonString: string): T {
        const jsonObject: any = JSON.parse(jsonString);
        const object = new this();
        for (const prop in jsonObject) {
            if (!jsonObject.hasOwnProperty(prop)) {
                continue;
            }

            object[prop] = jsonObject[prop];
        }
        return object as T;
    }
}

// class User {
//     private vame: string;
//     public getVame() {
//         return this.vame;
//     }
// }
//
// const json = {
//     vame: null,
// };
//
// const user = (<any>Object).assign(new User(), json) as User;
//
// console.log(user);
