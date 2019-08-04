import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'nodecg-toggle',
  // styleUrl: 'my-component.css',
  shadow: true
})
export class Toggle {

  /*
    Props that are passed down to clild components
  */
  @Prop() color: string;
  @Prop() disabled: boolean;
  @Prop() label: string;

  // private getText(): string {
  //   return format(this.middle, this.last);
  // }

  render() {
    format();
    return (
      <ion-item>
        <ion-toggle color={this.color} disabled={this.disabled}></ion-toggle>
        <ion-label>{this.label}</ion-label>
      </ion-item>
    );
  }
}
