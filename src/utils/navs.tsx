import { AccountButton } from '@/app/(components)/buttons/account'
import { SignUpButton } from '@/app/(components)/buttons/signup'
import { type INavs } from '@/types/navs'

export const NavsHeaders: INavs[] = [{
  routeName: '/signup',
  elements: [<AccountButton label='Entrar' url='/login'/>]
}, {
  routeName: '/login',
  elements: [<SignUpButton/>]
}, {
  routeName: '/',
  elements: [
    <AccountButton label='Entrar' url='/login'/>,
    <SignUpButton/>
  ]
}]
