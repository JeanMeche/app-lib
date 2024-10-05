import { Directive, Input } from '@angular/core';

export class ExampleContext<T> {
  constructor(readonly $implicit: T, readonly identifier: string, readonly foo: T) {}
}

@Directive({ selector: '[example]', standalone: true })
export class ExampleDirective<T> {
  @Input() set example(v: T) {}
  static ngTemplateContextGuard<T>(
    dir: ExampleDirective<T>,
    ctx: unknown
  ): ctx is ExampleContext<T> {
    return true;
  }
}
