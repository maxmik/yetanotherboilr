/* eslint-disable no-undef, no-console */
import store from '@redux/store'

// On uncaught errors, read up the store state and send it out.

if (typeof window !== 'undefined') {
  window.onerror = () => {
    const serialized = store.getState().toJS()
    console.info(serialized)
  }
}

