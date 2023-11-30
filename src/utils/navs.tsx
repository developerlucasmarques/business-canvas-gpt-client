import { LoginButton } from '@/app/(components)/buttons/login'
import { SignUpButton } from '@/app/(components)/buttons/signup'
import { type INavs } from '@/types/navs'

export const NavsHeaders: INavs[] = [
  { routeName: '/signup', elements: [<LoginButton />] },
  { routeName: '/login', elements: [<SignUpButton/>] },
  { routeName: '/', elements: [<LoginButton/>, <SignUpButton/>] }
]
