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
        this.openContentByIndex(this.options.defaulOpenIndex)
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
        if (!buttonEl) {
            return
        }
        const openContent = this.findOpenContent(target)
        if (openContent) {
            this.closeContent(openContent)
        }
        this.openContent(buttonEl)
    }

    findButtonEl(el) {
        return el.closest('.' + Tabs.CLASS_NAV_ITEM)
    }

    findOpenContent(el) {
        return this.tabsEl.querySelector('.' + Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }

    openContent(el) {
        const index = this.navItems.indexOf(el)
        el.classList.add(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentItems[index].classList.add(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }

    closeContent(el) {
        const index = this.contentItems.indexOf(el)
        el.classList.remove(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
        this.navItems[index].classList.remove(Tabs.CLASS_NAV_ITEM_ACTIVE)
    }

    openContentByIndex(index) {
        this.contentItems[index].classList.add(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
        this.navItems[index].classList.add(Tabs.CLASS_NAV_ITEM_ACTIVE)
    }
}