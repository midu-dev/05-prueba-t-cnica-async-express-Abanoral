import net from 'node:net'
import fs from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'

// # EJERCICIO 1
export const ping = (ip, callback) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    const time = process.hrtime(startTime)
    const result = { time, ip }
    callback(null, result)
    client.end()
  })

  client.on('error', (err) => {
    callback(err, null)
    client.end()
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})

// # EJERCICIO 2
export function obtenerDatosPromise (callback) {
  return new Promise((resolve, reject) => {
    try {
      resolve({ data: 'datos importantes' })
    } catch (err) {
      reject(err)
    }
  })
}

// # EJERCICIO 3
// lee el archivo input.txt, guarda en una variable el contenido del archivo leído con el método readFile, este contenido lo transforma a mayúsculas. Esta variable, (contenido) la utiliza para escribir lo leído en otro archivo con el método writeFile, en este caso se escribe en el archivo output.txt.
export function procesarArchivo () {
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      handleError('Error leyendo archivo:', error)
      return
    }

    const textoProcesado = contenido.toUpperCase()

    fs.writeFile('output.txt', textoProcesado, error => {
      if (error) {
        handleError('Error guardando archivo:', error)
        return
      }

      console.log('Archivo procesado y guardado con éxito')
    })
  })
}

function handleError (message, error) {
  console.error(message, error.message)
}

export async function procesarArchivoPromise () {
  const contenido = await readFile('input.txt', { encoding: 'utf8' }).catch((error) => {
    console.error('Error leyendo archivo:', error.message)
    return ''
  })

  const textoProcesado = contenido.toUpperCase()

  try {
    await writeFile('output.txt', textoProcesado)
    // return contenidoEscrito
  } catch (error) {
    console.error('Error guardando archivo:', error.message)
    throw error
  }
}

// # EJERCICIO 4
export async function leerArchivos () {
  const archivo1 = await readFile('archivo1.txt', 'utf8')
  const archivo2 = await readFile('archivo2.txt', 'utf8')
  const archivo3 = await readFile('archivo3.txt', 'utf8')

  return `${archivo1} ${archivo2} ${archivo3}`
}

// # EJERCICIO 5
export async function delay (timeDelay) {
  // ...
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: 'Promesa resuelta' })
      }, timeDelay)
    } catch (error) {
      reject(error)
    }
  })
}

const result = await delay(2000)
console.log(result)
