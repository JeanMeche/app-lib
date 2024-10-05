import { Component } from '@angular/core';
import { ExampleDirective } from 'my-lib';

@Component({
  selector: 'test-cmp', 
  standalone: true,
  imports: [ExampleDirective],
  template: '<div *example="state; let id = identifier; let d = foo">{{id}}</div>',
})
export class TestCmp {
  state!:{foo: string};
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestCmp],
  template: `<test-cmp></test-cmp>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
