import Sjs_el from '../../sjs/element/Sjs_el'

class SecondApp extends Sjs_el {
  constructor() {
    super()
  }

  template = {
    node: 'p',
    content: 'SecondApp',
  }

}


export default new SecondApp().create()