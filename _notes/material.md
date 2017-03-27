##
    https://github.com/angular/material2
    https://github.com/angular/material2/blob/master/guides/getting-started.md
# install
    $ npm install --save @angular/material

## Coding
in app.module.ts
    import { MaterialModule } from '@angular/material';

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],