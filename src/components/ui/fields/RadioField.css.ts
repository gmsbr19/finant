import { style } from '@vanilla-extract/css'
import { inputField } from './FormField.css'
import { vars } from '@/styles/theme.css'

export const radioFieldContainer = style([inputField, {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 4
}])

export const radioInput = style({
    display: 'none'
})

export const radioLabel = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    color: vars.colors.textSecondary,
    border: `1px solid transparent`,
    selectors: {
        [`${radioInput}:checked + &`]: {
            backgroundColor: vars.colors.bgBase,
            border: `1px solid ${vars.colors.border}`,
            color: vars.colors.textPrimary,
        },
        '&:hover': {
            backgroundColor: vars.colors.bgSurface
        }
    }
})