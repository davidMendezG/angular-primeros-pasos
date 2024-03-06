import { NgModule, ɵCONTAINER_HEADER_OFFSET } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent,
    ],
    exports:[
        HeroComponent,
        ListComponent,
    ]
})

export class HeroesModule {}