import { Callback } from '../types/Callback';
import { AxiosPromise } from 'axios';
import HasId from '../interfaces/HadId';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  save(data: T): AxiosPromise;
  fetch(id: number): AxiosPromise;
}

interface Events {
  on(eventName: string, callabck: Callback): void;
  trigger(eventName: string): void;
}

export class BaseModel<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    const response = await this.sync.fetch(id);
    this.set(response.data);
  }

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attributes.getAll());
      this.trigger('save');
    } catch (e) {
      this.trigger('error');
    }
  }
}
