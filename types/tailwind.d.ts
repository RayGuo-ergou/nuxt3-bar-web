type colorType =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'primary'

type colorLevel =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type generalColor = 'inherit' | 'current' | 'transparent' | 'black' | 'white'
export type textColor =
  | `text-${colorType}-${colorLevel}`
  | `text-${generalColor}`
export type fillColor =
  | `fill-${colorType}-${colorLevel}`
  | `fill-${generalColor}`
export type darkTextColor =
  | `dark:text-${colorType}-${colorLevel}`
  | `dark:text-${generalColor}`
