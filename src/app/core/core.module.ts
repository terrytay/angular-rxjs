import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/reducers/collection.reducer';
import { booksReducer } from './state/reducers/books.reducer';

@NgModule({
  imports: [
    HttpClientModule,
      StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer
    })
  ],
  providers: [
    HttpClientModule
  ],
  declarations: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      )
    }
  }
}
