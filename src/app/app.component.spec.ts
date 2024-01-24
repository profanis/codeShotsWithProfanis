import { Component } from '@angular/core';
import { DeferBlockBehavior, DeferBlockState, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {


  // defer (when isVisible)
  // defer (on idle)
  // defer (on viewport)
  // defer (on timer(1000))
  // defer (on interaction)
  // defer (on hover)
  // defer (on immediate)
  // nested defer blocks

  it('should pass having - defer (when isVisible)', async () => {
    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        <button data-test="button--isVisible" (click)="isVisible = !isVisible">Toggle</button>

        @defer(when isVisible){
          <div>empty defer block</div>
        }
      `,
    })
    class DummyComponent {
      isVisible = false;
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const button = fixture.debugElement.query(By.css('[data-test="button--isVisible"]')).nativeElement;
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  })

  it('should pass having - defer (on idle)', fakeAsync( async () => {
     // Arrange
     await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Manual
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        @defer(on idle){
          <div>empty defer block</div>
        } @placeholder{

        } @error {

        } @loading {

        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const deferFixture = (await fixture.getDeferBlocks())[0]
    deferFixture.render(DeferBlockState.Complete)


    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  }))

  it('should pass having - defer (on viewport)', async () => {
    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Manual
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        @defer(on viewport){
          <div>empty defer block</div>
        } @placeholder{
          <div>placeholder</div>
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const deferFixture = (await fixture.getDeferBlocks())[0]
    deferFixture.render(DeferBlockState.Complete)


    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  })

  it('should pass having - defer (on timer(1000))', fakeAsync(async () => {
     // Arrange
     await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        @defer(on timer(1000)){
          <div>empty defer block</div>
        } @placeholder{
          <div>placeholder</div>
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    tick(1000)


    fixture.detectChanges();
    // await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  }))

  it('should pass having - defer (on interaction)', async () => {
    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        <button #trigger data-test="button--interaction">Interact</button>
        @defer(on interaction(trigger)){
          <div>empty defer block</div>
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const button = fixture.debugElement.query(By.css('[data-test="button--interaction"]')).nativeElement
    button.dispatchEvent(new Event('click'));


    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  })

  it('should pass having - defer (on hover)', async () => {
    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        <button #trigger data-test="button--hover">Hover here</button>
        @defer(on hover(trigger)){
          <div>empty defer block</div>
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const button = fixture.debugElement.query(By.css('[data-test="button--hover"]')).nativeElement
    button.dispatchEvent(new Event('mouseenter'));


    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  })

  it('should pass having - defer (on immediate)', fakeAsync(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        @defer(on immediate){
          <div>empty defer block</div>
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act

    tick(0)
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
  }))

  it('should pass having - nested defer blocks',  async () => {

    // Arrange
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Manual
    }).compileComponents();

    @Component({
      selector: 'app-root',
      template: `
        @defer {
          <div>empty defer block</div>

          @defer {
            <div>nested defer block</div>
          }
        }

      `,
    })
    class DummyComponent {
    }

    const fixture = TestBed.createComponent(DummyComponent);

    // Act
    const deferFixture = (await fixture.getDeferBlocks())[0]
    await deferFixture.render(DeferBlockState.Complete)

    const nestedDeferBlock = (await deferFixture.getDeferBlocks())[0]
    await nestedDeferBlock.render(DeferBlockState.Complete)

    fixture.detectChanges();
    await fixture.whenStable();


    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('nested defer block');
  })


});
