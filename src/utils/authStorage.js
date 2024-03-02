import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken(){
    const token = await AsyncStorage.getItem(
      `${this.namespace}:token`
    );
      return token ? JSON.parse(token) : 'No token set';
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(token)
    )
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}
export default AuthStorage;