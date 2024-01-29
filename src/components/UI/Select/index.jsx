import { useEffect, useState } from 'react';
import cn from 'classnames';
import './index.css';

const Select = ({
                    options,
                    title = null,
                    className = null,
                    subtitle = null,
                    disable = false,
                    setValue = function () { },
                    onChange = function () { },
                    arrow = true,
                    ...props
                }) => {
    const initState = (options, title) => {
        let val = { label: 'Выберите', value: null }
        if (props.select) {
              return  props.select
        }
        if (options?.length) {
            if (!title)
                if (options[0].label) val = options[0]
                else val = { value: options[0].value ? options[0].value : options[0].label, label: options[0].label }
            else val = { label: title.label !== undefined ? title.label : title, value: title.value ? title.value : null }
        }
        return val
    }

    const [isOpen, setOpen] = useState(false)
    const [value, getValue] = useState(initState(options, title))

   useEffect(() => { if (props?.select !== undefined) getValue(initState(options, title)) }, [options, props?.select])

    const [noSelect, setNoSelect] = useState(false)

    const select = (el, e) => {
        getValue(el?.label ? el : { value: el, label: el })
        onChange(el)
        setValue({ event: e, value: el })
        setNoSelect(true)
    }
    useEffect(() => { if (title?.value) getValue(title) }, [title])

    return <>
        <div
            onKeyUp={(e) =>   setOpen(!isOpen)}
            tabIndex={0}
            className={cn(
                'select btn',
                { [className]: className },
                { active: isOpen },
                { 'select--noArrow': (!arrow || options?.length === 0) },
                { disable: disable },
                { 'noActive': options?.length === 0 }
            )}
            onClick={() => {
                if (!disable && options?.length !== 0) setOpen(!isOpen);
            }}
            data-select={noSelect}
            {...props}
        >
      <span>
        {subtitle && value.value !== null && subtitle}
          {value.label}
          {arrow && options?.length !== 0 && (
              <svg xmlns='http://www.w3.org/2000/svg' width="11" height="8">
                  <path
                      d='m9.7307 2.7082-4 4a1 1 0 0 1-1.42 0l-4-4a1.0041 1.0041 0 0 1 1.42-1.42l3.29 3.3 3.29-3.3a1.0041 1.0041 0 0 1 1.42 1.42Z'
                      fill='currentColor'
                  />
              </svg>
          )}
      </span>

            {options?.length > 0 && <div className={'hideWrapper'}>
                {!options?.length && 'нет данных'}
                <ul className={'selectList customScroll'}>
                    {options?.map((el, index) => (
                        <li
                            key={index}
                            tabIndex={0}
                            onKeyUp={(e) =>   select(el, e)}
                            onClick={(e) => select(el, e)}
                        >
                            {el.label !== undefined ? el.label : el}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    </>
}

export default Select
