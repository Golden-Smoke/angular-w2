import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './booklist/booklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework2-2201681046';
}
