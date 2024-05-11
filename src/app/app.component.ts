import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCompanyComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ndregistracija';
}
