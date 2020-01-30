type VOICE_KEY = 
  | 'HELLO_WORLD'
  | 'SEARCH'
  | 'SEARCH_OVERLAP'
  | 'SHORTEST'
  | 'GOAL'
  | 'POWER_ON'
  | 'LOST'

const VOICES_JP: { [key in VOICE_KEY]: string } = {
  HELLO_WORLD: 'ハローワールド',
  SEARCH: '探索します',
  SEARCH_OVERLAP: '重ね探索します',
  SHORTEST: '最短経路を走ります',
  GOAL: 'ゴールしました。やったね！',
  POWER_ON: '起動しました',
  LOST: '道に迷いました'
}

function path(v: VOICE_KEY) {
  return `${v}.wav`
}

export default VOICES_JP
