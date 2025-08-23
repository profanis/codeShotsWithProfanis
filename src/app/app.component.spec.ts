import { AppComponent } from './app.component';
import { createComponentFactory } from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  const testSetup = (props?: {}) => {
    const spectator = createComponent({
      providers: [],
      props: {},
    });

    const component = spectator.component;

    return { spectator, component };
  };

  it('should create the app', () => {
    // Arrange
    const { component } = testSetup();

    // Act

    // Assert
    expect(component).toBeTruthy();
  });

  it(`should have as title 'profanis-yt'`, () => {
    // Arrange
    const { component } = testSetup();

    // Act

    // Assert
    expect(component.title).toEqual(
      'Code Shots With Profanis - Like and Subscribe :)',
    );
  });

  it(`should have as title 'Code Shots With Profanis - Like and Subscribe :)'`, () => {
    // Arrange
    const { component } = testSetup();

    // Act

    // Assert
    expect(component.title).toEqual(
      'Code Shots With Profanis - Like and Subscribe :)',
    );
  });

  it('should render title', () => {
    // Arrange
    const { spectator } = testSetup();

    // Act
    spectator.detectChanges();

    // Assert
    expect(spectator.query('.content span')!.textContent).toContain(
      'Code Shots With Profanis - Like and Subscribe :) app is running!',
    );
  });
});
