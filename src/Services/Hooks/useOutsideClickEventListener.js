import { useCallback, useEffect } from 'react'

export default function useOutsideClickEventListener(listener, ref, dep) {
  const callbackListener = useCallback(listener, dep)
  const onMousedown = useCallback(({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      callbackListener()
    }
  }, [ callbackListener, ref ])
  
  useEffect(() => {
    document.addEventListener('mousedown', onMousedown)
    
    return () => {
      document.removeEventListener('mousedown', onMousedown)
    }
  }, [ onMousedown ])
}