import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCard implements OnChanges {
  @Input() externalColor: string = 'black'; // Default color if not provided
  @Input('appHighlightCard') defaultColor: string = 'red'; // Alias for the input property

  constructor(private ele: ElementRef) {}

  ngOnChanges(): void {
    // Reset background color when input properties change
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
   @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor = this.externalColor;
   }
    @HostListener('mouseout') out(){
      this.ele.nativeElement.style.backgroundColor = this.defaultColor;
    }

}
