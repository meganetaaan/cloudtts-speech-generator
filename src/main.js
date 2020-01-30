// Imports the Google Cloud client library
import textToSpeech from '@google-cloud/text-to-speech'
import fs from 'fs'
import util from 'util'
import VOICES from './voices'

// Import other required libraries
// Creates a client
const client = new textToSpeech.TextToSpeechClient()
const OUTPUT_DIR = './voices'
async function quickStart() {
  // The text to synthesize
  for (let [key, voice] of Object.entries(VOICES)) {
    const text = voice

    // Construct the request
    const request = {
      input: { text: text },
      // Select the language and SSML voice gender (optional)
      voice: {
        languageCode: 'ja-JP',
        name: 'ja-JP-Wavenet-A',
        ssmlGender: 'NEUTRAL'
      },
      // select the type of audio encoding
      audioConfig: { audioEncoding: 'LINEAR16' }
    }
    console.log(`POSTING: ${JSON.stringify(request)}`)

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request)
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile)
    await writeFile(`${OUTPUT_DIR}/${key}.wav`, response.audioContent, 'binary')
    //   console.log("Audio content written to file: output.mp3");
  }
}
quickStart()
