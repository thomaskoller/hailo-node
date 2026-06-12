export class MutexQueueFullError extends Error {
  constructor() {
    super("Too many requests waiting for the device");
    this.name = "MutexQueueFullError";
  }
}

export class Mutex {
  private queue: Array<() => void> = [];
  private locked = false;

  constructor(private maxQueue: number = Infinity) {}

  async acquire(): Promise<() => void> {
    if (!this.locked) {
      this.locked = true;
      return this.createRelease();
    }
    if (this.queue.length >= this.maxQueue) {
      throw new MutexQueueFullError();
    }
    return new Promise<() => void>((resolve) => {
      this.queue.push(() => resolve(this.createRelease()));
    });
  }

  private createRelease(): () => void {
    let released = false;
    return () => {
      if (released) return;
      released = true;
      const next = this.queue.shift();
      if (next) {
        next();
      } else {
        this.locked = false;
      }
    };
  }
}
