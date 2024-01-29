import React,{ useEffect } from 'react';
import cn from 'classnames'
import './index.css'

const Modal = ({  active = false, className = false,  children, styleContent = {} }) => {
    const addNoScroll = () => { document.body.style.overflow = 'hidden' }
    const removeNoScroll = () => { document.body.style.overflow = 'auto' }

    useEffect(() => {
        (active === true) ? addNoScroll() : removeNoScroll()
        return removeNoScroll
    }, [active])

    return <div className={cn('modal__background', { 'active': active })}  >
        <div className={cn('modal__content', { [className]: className })} style={styleContent} onMouseDown={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()}>
            {active && children}
        </div>
    </div>
}


export default Modal