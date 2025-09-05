declare module 'circletype' {
  export default class CircleType {
    constructor(el: Element | null);
    radius(n: number): this;
    dir(n: number): this;
    force(n: boolean): this;
    refresh(): this;
  }
}

