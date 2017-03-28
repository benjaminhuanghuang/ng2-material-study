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

in styles.css
    @import '~https://fonts.googleapis.com/icon?family=Material+Icons';
    @import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';

in app.component.html
    <md-tab-group>
  <md-tab label="One">
    <h1>Some tab content</h1>
    <p>...</p>
  </md-tab>
  <md-tab label="Two">
    <h1>Some more tab content</h1>
    <p>...</p>
  </md-tab>
</md-tab-group>
<md-radio-group>
  <md-radio-button value="1">Option 1</md-radio-button>
  <md-radio-button value="2">Option 2</md-radio-button>
</md-radio-group>
<md-icon>delete_forever</md-icon>