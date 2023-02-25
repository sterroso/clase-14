class Singleton {
  static #instance;
  #message;
  #modified;

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    Singleton.#instance = this;
  }

  set message(message) {
    this.#message = message;
    this.#modified = new Date(Date.now());
  }

  get message() {
    return this.#message || "No message has been set yet!";
  }

  get lastModified() {
    return this.#modified;
  }

  static getInstance() {
    return Singleton.#instance || (Singleton.#instance = new Singleton());
  }
}

export default new Singleton();
