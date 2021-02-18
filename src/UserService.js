class UserService {
    constructor(dependencies) {
      this._apiUrl = dependencies.apiUrl;
    }
  
    async getUsers() {
      const url = `${this._apiUrl}/users`;
      try {  
        const users = await fetch(url).then((res) => res.json());  
        return users;
      } catch (e) {
        const error = new Error(`Error getting the users:  ${e.message}`);
        throw new Error(error);
      }
    }
  }

  export default UserService;