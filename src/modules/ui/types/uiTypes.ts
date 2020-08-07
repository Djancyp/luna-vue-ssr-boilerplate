
export default interface store {
  sidebar: boolean,
  overlay: boolean,
  loader: boolean,
  authElem: 'login',
  openMyAccount: boolean,
  submenu: {
    depth: any,
    path: any
  }
}
