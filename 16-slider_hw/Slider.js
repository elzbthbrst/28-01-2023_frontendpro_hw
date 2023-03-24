class Slider {
    static CLASS_SLIDER_ITEM = 'slider-item'
    static CLASS_SLIDER_ITEM_ACTIVE = 'slider-item-active'
    static CLASS_DEFAULT_ACTIVE_INDEX = 0
    constructor (rootEl) {
        this.rootEl = rootEl
        this.rootEls = Array.from(this.rootEl.children)
        console.log(this.rootEls);

        this.bindStyles()
        this.bindEvent()
        this.showSliderByIndex(Slider.CLASS_DEFAULT_ACTIVE_INDEX)
    }
    bindStyles () {
        this.rootEls.forEach((el) => {
            el.classList.add(Slider.CLASS_SLIDER_ITEM)
        })
    }
    bindEvent() {
        this.rootEl.addEventListener('click', (e) => this.onRootElClick(e))
    }
    onRootElClick(e) {
        const target = e.target
        const sliderEl = this.findSliderEl(target)
        if (!sliderEl) {
            return
        }
        const activeSliderEl = this.findActiveSliderEl()
        const indexOfactive = this.findIndex(this.rootEls, activeSliderEl)
        if (activeSliderEl) {
            this.removeSlide(indexOfactive)
        }
        this.openSlide(indexOfactive, this.rootEls)
        console.log(indexOfactive);
        
        
    }
    findSliderEl(el) {
        return el.closest('.' + Slider.CLASS_SLIDER_ITEM)
    }
    findActiveSliderEl() {
        return this.rootEl.querySelector('.' + Slider.CLASS_SLIDER_ITEM_ACTIVE)
    }
    findIndex(arr, el) {
        return arr.indexOf(el)
    }
    removeSlide(index) {
        this.rootEls[index].classList.remove(Slider.CLASS_SLIDER_ITEM_ACTIVE)
    }
    openSlide(index, arr) {
        if (this.isElLastInArr(index, arr)) {
            this.rootEls[0].classList.add(Slider.CLASS_SLIDER_ITEM_ACTIVE)
            return
        } 
        this.rootEls[index + 1].classList.add(Slider.CLASS_SLIDER_ITEM_ACTIVE)

    }
    isElLastInArr(index, arr) {
        return index + 1 > arr.length - 1
    }
    showSliderByIndex(index) {
        this.rootEls[index].classList.add(Slider.CLASS_SLIDER_ITEM_ACTIVE)
    }
}