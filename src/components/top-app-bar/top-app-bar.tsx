import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'top-app-bar',
  styleUrl: 'top-app-bar.scss',
  shadow: true,
  host: {
      role: 'toolbar'
  }
})

export class TopAppBar {

    @Element() topBarElement: HTMLElement;
    @Prop() firstName: string;
    @Prop() secondName: string;
    @Prop() background: string;
    @Prop() color: string;
    
    setColors(backgroundColor: string, color: string) {
        // Set the element's colors
        this.topBarElement.style.backgroundColor = backgroundColor;
        this.topBarElement.style.color = color;
    }

    componentWillLoad() {
        this.setColors(this.background, this.color);    
    }
  
    render() {
        return (
            <div>
                <h1>
                    <span class='first-name'>{this.firstName}</span>
                    <span class='second-name'>{this.secondName}</span>
                </h1>
                <slot />
            </div>
        );
    }
}