import net from 'node:net'
import fs from 'node:fs'

// # EJERCICIO 1
export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    const time = process.hrtime(startTime);
    const result = { time, ip };
    callback(null, result);
    client.end();
  });

  client.on('error', (err) => {
    callback(err, null);
    client.end();
  });
};

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})

// # EJERCICIO 2
export function obtenerDatosPromise(callback) {
  return new Promise((resolve, reject) => {
    try{
      resolve( { data: 'datos importantes' })
    }catch(err) {
      reject(err)
    }
  })
}

// # EJERCICIO 3
export function procesarArchivo () {
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message)
      return false
    }

    setTimeout(() => {
      const textoProcesado = contenido.toUpperCase()

      fs.writeFile('output.txt', textoProcesado, error => {
        if (error) {
          console.error('Error guardando archivo:', error.message)
          return false
        }

        console.log('Archivo procesado y guardado con éxito')
        return true
      })
    }, 1000)
  })
}

export function procesarArchivoPromise () {
  // tu código aquí
}

// # EJERCICIO 4
export function leerArchivos () {
  const archivo1 = fs.readSync('archivo1.txt', 'utf8')
  const archivo2 = fs.readSync('archivo2.txt', 'utf8')
  const archivo3 = fs.readSync('archivo3.txt', 'utf8')

  return `${archivo1} ${archivo2} ${archivo3}`
}

// # EJERCICIO 5
export async function delay () {
  // ...
}
