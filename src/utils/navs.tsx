import { AccountButton } from '@/app/(components)/buttons/account'
import { SignUpButton } from '@/app/(components)/buttons/signup'
import { type INavs } from '@/types/navs'

export const NavsHeaders: INavs[] = [{
  id: 1,
  element: <AccountButton label='Entrar' url='/login'/>
}, {
  id: 2,
  element: <SignUpButton/>
}]
