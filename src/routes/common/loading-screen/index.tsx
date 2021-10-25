import { FunctionalComponent, h } from 'preact'
import { useEffect, useReducer } from 'preact/hooks'
import style from './style.css'

export interface LoadingWidgetProps {
  style: string;
  isLoading: boolean;
  progress: number;
  statusMessage: string;
}

export type UpdateProgressFunction = (progress: number) => void

export interface LoadingScreenProps {
  updateProgress: UpdateProgressFunction;
}

export interface LoadingState {
  isLoading: boolean;
  progress: number;
  statusMessage: string;
}

export const initialState: LoadingState = {
  isLoading: true,
  progress: 1,
  statusMessage: 'Loading',
}

const statusMessages: string[] = [
  'Planting apple seeds',
  'Lazering dolphins',
  'Crisping nachos',
  'Reticulating bungholes',
  'Turtling half-shells',
  'Fuzzing resplicers',
  'Treadmilling',
  'Forkifying respores',
  'Watering existentialisms',
  'Keeping the peace',
  'Gravitizing anti-gravitons',
  'Ratcheting crackers',
  'Revolving revolvers',
  'Rolling rocks of roll into roll-rocks to be rocked by rollers',
  'Cawwing cowards',
  'Tickling dangleberries',
  'Dignifying dignity',
  'Zapping anomalies',
  'Mining Dogecoin',
  'Phishing for compliments',
  'Realizing the meaning of life',
  'Nulling sensitivities',
  'Minimizing the wage gap',
  'Tossing salad',
  'Going out for a rip',
  'Unrectifying bridge rectifiers',
  'Cauliflowering rotisseries',
  'Truncating tree trunks',
  'Solving p=np',
  'Rejoicing reggae',
  'Crushing cylinders of diluted ethanol',
  'Pumping backwash',
  'Pandering bandits',
  'Wheelspinning',
]

export const reducer = (state: LoadingState, action: { type: string, arg?: number }): LoadingState => {
  switch (action.type) {
  case 'start':
    return {
      ...state,
      isLoading: true,
      progress: 1,
      statusMessage: 'Started'
    }
  case 'stop':
    return {
      ...state,
      isLoading: false,
      progress: 100,
      statusMessage: 'Done!'
    }
  case 'update':
    // if (state.progress>=100) {
    //   console.log('100%')
    // }
    return {
      ...state,
      isLoading: state.progress<100,
      // progress: action.arg ?? 0,
      progress: state.progress+100/3,
      statusMessage: statusMessages[(Math.random()*statusMessages.length)|0]
    }
  default:
    throw `Undefined action "action.type"`
  }
}

const progressToStyleString = (progress: number): string => {
  return `width: ${progress}%`
}

const LoadingWidget = (props: LoadingWidgetProps) => {
  const { style, isLoading, progress, statusMessage } = props

  return <div class={`${style} modal-dialog modal-fullscreen text-center ${ isLoading ? '' : 'd-none' }`}>
    <div class="spinner-border">
      <span class="visually-hidden">Loading...</span>
    </div>
    <br />
    <span>{statusMessage}{ isLoading ? '...' : '' }</span>
    <div class="progress mt-2 mx-3">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={progressToStyleString(progress)} />
    </div>
  </div>
}

const LoadingScreen: FunctionalComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({type: 'update', arg: state.progress})
    }, Math.random()*1024)
    return () => clearTimeout(timeout)
  })

  return <LoadingWidget style={style.loading_screen} isLoading={state.isLoading} progress={state.progress} statusMessage={state.statusMessage} />
}

export default LoadingScreen
