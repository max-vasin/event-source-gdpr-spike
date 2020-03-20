export const encrypt = (keySelector, data) => {
  console.log(`encrypting with ${keySelector}`)
}

export const decrypt = (keySelector, blob) => {
  console.log(`decrypting with ${keySelector}`)
}

export const forget = keySelector => {
  console.log(`throwing away key ${keySelector}`)
}
