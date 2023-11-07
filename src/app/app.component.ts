import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Task {
  name: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signals';

  name = signal('Antonio');
  tasks = signal<Task[]>([
    { name: 'Ver curso signals', isCompleted: true}
  ]);

  toggleName() {
    this.name.set('Candy');
  }

  addRandomTask() {
    this.tasks.update((task) => {
      return [...task, {name: 'Practica', isCompleted: false}]
    });
  }
}
