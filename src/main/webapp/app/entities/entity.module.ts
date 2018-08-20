import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FrontestBookModule } from './book/book.module';
import { FrontestCategoryModule } from './category/category.module';
import { FrontestAuthorModule } from './author/author.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FrontestBookModule,
        FrontestCategoryModule,
        FrontestAuthorModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontestEntityModule {}
