import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture,  } from '@angular/core/testing';

// Az első describe blokk: Az AppComponent specifikációja

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

// Ez a hook minden teszt futtatása előtt lefut

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

  // Létrehozzuk az AppComponent-et és a hozzá tartozó fixture-t

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // Az első teszt: Ellenőrzi, hogy az AppComponent létrejött-e

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // A második teszt: Ellenőrzi, hogy az AppComponent 'title' property-je 'your-app-name'

  it(`should have as title 'your-app-name'`, () => {
    expect(component.title).toEqual('your-app-name');
  });

    // A harmadik teszt: Ellenőrzi, hogy megjelenik-e a navigációs sáv a DOM-ban

  it('should render navigation bar', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav.navbar')).toBeTruthy();
  });
});

  // A második describe blokk: Az AppComponent aszinkron specifikációja

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

    // Az első aszinkron teszt: Ellenőrzi, hogy az AppComponent létrejött-e

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

    // A második aszinkron teszt: Ellenőrzi, hogy az AppComponent 'title' property-je 'HealthVaultPro'

  it(`should have the 'HealthVaultPro' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HealthVaultPro');
  });

    // A harmadik aszinkron teszt: Ellenőrzi, hogy megjelenik-e a 'Hello, HealthVaultPro' szöveg

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, HealthVaultPro');
  });
});
