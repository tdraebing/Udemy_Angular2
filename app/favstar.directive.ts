import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[favstar]',
    host:  {
        '(click)': 'switchState()'
    }
})

export class FavStar{
    constructor(private elRev: ElementRef, private renderer: Renderer){

    }

    switchState(){
        console.log(this.elRev.nativeElement.classList.contains("glyphicon-star-empty"))
        if (this.elRev.nativeElement.classList.contains("glyphicon-star-empty")){
            this.renderer.setElementClass(this.elRev.nativeElement, 'glyphicon-star-empty', false);
            this.renderer.setElementClass(this.elRev.nativeElement, 'glyphicon-star', true);
        }else{
            this.renderer.setElementClass(this.elRev.nativeElement, 'glyphicon-star', false);
            this.renderer.setElementClass(this.elRev.nativeElement, 'glyphicon-star-empty', true);
        }
    }

}