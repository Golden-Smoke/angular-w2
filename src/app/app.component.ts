import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bookList} from '../booklist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework2-2201681046';
  books = bookList;
}
