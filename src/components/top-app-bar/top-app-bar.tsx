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
    @Prop() firstNameUrl: string;
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
            <div class='top-app-bar'>
                <div class='region region__navigation'>
                    <slot name='navigation-drawer' />
                    <h1>
                        <span class='first-name'>
                            <a href={this.firstNameUrl} target='_blank' rel='noopener noreferrer'>{this.firstName}</a>
                        </span>
                        <span class='second-name'>{this.secondName}</span>
                    </h1>
                </div>
                <div class='region region__flex'></div>
                <div class='region region__icon-buttons'>
                    <slot name='help-and-feedback' />
                    <slot name='notifications-bell' />
                    <slot name='profile-menu' />
                </div>
            </div>
        );
    }
}