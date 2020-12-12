import fs from "fs";
import path from 'path'

const dirMain: fs.Dir = fs.opendirSync('arquivos-exemplos')
const nameDirs: string[] = []

while (true) {
    const dirent: fs.Dirent = dirMain.readSync()
    if (dirent === null) break
    nameDirs.push(dirent.name)
}

const third: number = Math.round(nameDirs.length / 3)
for (let index = 0; index < nameDirs.length - third; index++) {
    const nameDir: string = nameDirs[index];
    fs.renameSync(path.join('arquivos-exemplos', nameDir), path.join('nao-compilar', nameDir))
}
