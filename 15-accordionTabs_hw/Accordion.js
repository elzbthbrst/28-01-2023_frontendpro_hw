"use strict"
class Tabs {
    static CLASS_NAV_ITEM = 'nav-item'
    static CLASS_CONTENT_ITEM = 'content-item'
    static CLASS_CONTENT_ITEM_ACTIVE = 'content-item-active'
    static CLASS_NAV_ITEM_ACTIVE = 'nav-item-active'
    static DEFAULT_OPEN = 0

    constructor(tabsEl, options) {
        this.options = {
            defaulOpenIndex: Tabs.DEFAULT_OPEN,
            ...options
        }
        this.tabsEl = tabsEl
        this.navItems = Array.from(this.tabsEl.querySelector('nav').children)
        this.contentItems = Array.from(this.tabsEl.querySelector('div').children)
        this.bindStyles()
        this.bindEvents()
        this.openContent(this.options.defaulOpenIndex)
    }


    bindStyles() {
        this.navItems.forEach((el) => {
            el.classList.add(Tabs.CLASS_NAV_ITEM)
        })
        this.contentItems.forEach((el) => {
            el.classList.add(Tabs.CLASS_CONTENT_ITEM)
        })
    }

    bindEvents() {
        this.tabsEl.addEventListener('click', (e) => this.onTabsElClick(e))
    }

    onTabsElClick(e) {
        const target = e.target
        const buttonEl = this.findButtonEl(target)
        const buttonElIndex = this.findIndex(this.navItems, buttonEl)
        if (!buttonEl) {
            return
        }
        const openContent = this.findOpenContent()
        const openIndex = this.findIndex(this.contentItems, openContent)
        
        if (openContent) {
            this.closeContent(openIndex)
        }
        this.openContent(buttonElIndex)
    }

    findButtonEl(el) {
        return el.closest('.' + Tabs.CLASS_NAV_ITEM)
    }
    
    findIndex(arr, el) {
        return arr.indexOf(el)
    }

    findOpenContent() {
        return this.tabsEl.querySelector('.' + Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }

    openContent(index) {
        this.navItems[index].classList.add(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentItems[index].classList.add(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }

    closeContent(index) {
        
        this.contentItems[index].classList.remove(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
        this.navItems[index].classList.remove(Tabs.CLASS_NAV_ITEM_ACTIVE)
    }
}