import { createRef, FunctionalComponent, h } from 'preact'
// import { Link } from 'preact-router'
// import { useState } from 'preact/hooks'
import Helmet from 'react-helmet'
import useHashState from 'use-hash-state'

// type ParseSequenceFunction = (sequence: string) => BeepSequence
// type SetSequenceFunction = (sequence: BeepSequence) => void
// type SetStatusFunction = (status: string) => void

interface CodeEditorProps {
  code: string;
}

const PolynumberCodeEditor: FunctionalComponent<CodeEditorProps> = (props: CodeEditorProps) => {
  const ref = createRef()
  const handleInput = (e: Event): void => {
    if (e.target instanceof HTMLTextAreaElement) {
      // const sequence = props.parseSequence(e.target.value)
      // props.setSequence(sequence)
      // props.setStatus('Nice polynumber')
    }
  }

  return (
    <div ref={ref}>
      <textarea class="alert alert-dark w-100 font-monospace" onInput={handleInput}>{props.code}</textarea>
    </div>
  )
}

const PolynumberEditor: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const initialHashState = {0: ''}
  const {state, setStateAtKey} = useHashState(initialHashState)
  console.log(state, setStateAtKey)
  // const initialSequence = state[0].length ? parseBeepHash(state[0]) : new BeepSequence([])
  // const [sequence, setSequence] = useState(initialSequence)
  // const [status, setStatus] = useState('Ready to beep')
  // const [GRUBCode, setGRUBCode] = useState(initialSequence.toGRUBInitTune())
  // const [beepCode, setBeepCode] = useState(initialSequence.toBeepCommand())
  // const handlePlayClick = (): void => {
  //   playBeepSequence(sequence)
  // }
  // const handleGRUBCodeUpdate = (sequence: BeepSequence): void => {
  //   setSequence(sequence)
  //   setStateAtKey(0, sequence.toHash())
  //   setBeepCode(sequence.toBeepCommand())
  // }
  // const handleBeepCodeUpdate = (sequence: BeepSequence): void => {
  //   setSequence(sequence)
  //   setStateAtKey(0, sequence.toHash())
  //   setGRUBCode(sequence.toGRUBInitTune())
  // }

  return (
    <section class="container py-5" ref={ref}>
      <Helmet><title>Polynumber Editor</title></Helmet>

      <h1>Polynumber Editor</h1>

      <PolynumberCodeEditor code="koad" />

      <button type="button" class="btn btn-success float-end">Go?</button>

      <h2>Status</h2>
      <p>poly</p>

    </section>
  )
}

export default PolynumberEditor
