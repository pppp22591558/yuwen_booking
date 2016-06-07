import 'babel-polyfill'

import Nightmare from 'nightmare'

const nightmare = Nightmare({
  show: true,
  openDevTools: true,
  waitTimeout: 500
})

let a = 1

function run() {
  nightmare.goto('https://tixcraft.com/activity/detail/16_Sandy')
    .cookies.clear('SID')
    .cookies.set({
      name:  'SID',
      value: '3o3l4rn0f1qpnlm6ro4iief8c6',
      domain: 'tixcraft.com',
      path: '/',
      session: true
    })
    .refresh()
    .wait('a[href^="/activity/game"]')
    .click('a[href^="/activity/game"]')
    .wait('input[data-href^="/ticket/area"]')
    .click('input[data-href^="/ticket/area"]')
    .catch(error => {
      run()
    })
}

run()
