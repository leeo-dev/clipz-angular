import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core'
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  ngAfterContentInit (): void {
    if (this.tabs == null) return
    const activeTabs = this.tabs?.filter(tab => tab.active)
    if ((activeTabs === null) || activeTabs.length === 0) {
      this.selectTab(this.tabs.first)
    }
  }

  selectTab (tab: TabComponent, event?: Event): void {
    event?.preventDefault()
    this.tabs?.forEach((tab) => { tab.active = false })
    tab.active = true
  }
}
