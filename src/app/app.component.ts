import { Component } from '@angular/core';

/**
 * App Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bootstrap-practice';

  public featureLoaded: string = 'recipe';

  public onNavigate(feature: string): void {
    this.featureLoaded = feature;
  }

}
