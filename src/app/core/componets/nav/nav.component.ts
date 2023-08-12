import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('sidebarWidth', [
      state('collapsed', style({ width: '4rem' })),
      state('expanded', style({ width: '25%' })),
      transition('collapsed <=> expanded', animate('200ms ease-in-out'))
    ])
  ]
})
export class NavComponent  implements OnInit{
  menuItems = [
    { text: 'Home', icon: 'home', path:'' },
    { text: 'Author', icon: 'info-circle', path: 'author' },
    { text: 'Services', icon: 'cogs' },
    // Add more menu items as needed
  ];

  showText = true;  
  isMobileView = false;


  checkViewport() {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  @HostBinding('@sidebarWidth')
  sidebarState: 'collapsed' | 'expanded' = 'expanded';

  toggleTextVisibility() {
    this.showText = !this.showText;
    this.isMobileView = false;

    // Toggle the sidebar width state
    this.sidebarState = this.showText ? 'expanded' : 'collapsed';
  }
  ngOnInit() {
    this.checkViewport();
    window.addEventListener('resize', () => {
      this.checkViewport();
    });
  }
  }
