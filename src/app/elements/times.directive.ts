import { Directive,ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewcontainer: ViewContainerRef,
    private templateref: TemplateRef<any>,
  ) { }

  @Input('appTimes')  set render(times:number){
    this.viewcontainer.clear()
    console.log(times);
    
    for(let i=0;i<times;i++){
      this.viewcontainer.createEmbeddedView(this.templateref,{})
    }
  }


}
