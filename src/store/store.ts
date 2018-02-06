export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    // unsubscribe
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }

  private notify() {
    // this.value refers to value on line 12
    this.subscribers.forEach(fn => fn(this.value));
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      // which reducers?? The reducer is filtered by the prop, here it is todos.
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}

// When we create instance of this store, we can get the state by doing 'store.value'
